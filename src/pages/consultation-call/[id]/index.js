import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import SpinnerLoader from "@/components/SpinnerLoader";
// import ConsultationChatView from "@/components/ConsultationCall/ConsultationChatView";
import { toast } from "react-toastify";
import { addCommonData, updateCommonData } from "@/apis/common";

let audioTrack;
let videoTrack;
let AgoraRTC;
let client;

function Index() {
  //new code-------------------------------------------------------------------------------------------
  const Router = useRouter();
  const { id } = Router.query;
  const [agoraDatum, setAgoraDatum] = useState(null);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioPubed, setIsAudioPubed] = useState(false);
  const [isVideoPubed, setIsVideoPubed] = useState(false);
  const [isVideoSubed, setIsVideoSubed] = useState(false);
  const appid = "4437e0a79c594e9fabb982fc6786fcc8";
  const [isJoined, setIsJoined] = useState(false);
  const [clientState, setClientState] = useState("DISCONNECTED");
  const [isReadyToPublish, setIsReadyToPublish] = useState(false);
  const channel = useRef("");
  const remoteVideoContainerRef = useRef(null);

  /// tryin to fetch agora join details
  useEffect(() => {
    if (id) {
      console.log("iddwdwdwfwfe", id);
      genToken();
    }
  }, [id]);

  const genToken = async () => {
    try {
      const response = await addCommonData(
        { bookingId: id },
        "generate-agora-token"
      );
      console.log(response);
      setAgoraDatum(response);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };

  /// when agora datum ready just join
  useEffect(() => {
    if (agoraDatum) {
      console.log("DEBUG publishvideo");
      publishVideo();
    }

    return () => {
      if (client && isJoined) {
        client
          .leave()
          .then(() => {
            setIsJoined(false);
            console.log("Left channel successfully");
          })
          .catch((err) => {
            console.error("Error leaving channel:", err);
          });
      }
    };
  }, [agoraDatum, remoteVideoContainerRef]);

  const publishVideo = async () => {
    if (clientState === "CONNECTED" || clientState === "CONNECTING") {
      console.log("Client is already connected or connecting");
      return;
    }

    /// DYNAMIC IMPORT
    AgoraRTC = (await import("agora-rtc-sdk-ng")).default;
    console.log(AgoraRTC);
    client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
    console.log(client);
    await client.setClientRole("host");

    //// PUBLISH VIDEO STUFF
    await turnOnCamera(true);
    await turnOnMicrophone(true);

    console.log(
      "isJoined inside publishVideo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
      isJoined,
      agoraDatum
    );

    if (!isJoined && remoteVideoContainerRef.current) {
      console.log(
        "isJoined inside if block>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
        isJoined
      );

      await joinChannel();
    } else if (isJoined) {
      await client?.publish(videoTrack);
      setIsVideoPubed(true);
      await client?.publish(audioTrack);
      setIsAudioPubed(true);
    } else {
      console.error("Unable to join channel, cannot publish stream");
    }
  };

  const joinChannel = async () => {
    if (!channel.current) {
      channel.current = "react-room";
    }

    console.log("Current client state:", clientState);

    if (clientState === "CONNECTED") {
      console.log("Already connected to channel");
      return;
    }

    if (clientState === "CONNECTING") {
      console.log("Connection already in progress");
      return;
    }

    console.log(client);

    // if (isJoined) {
    //   await leaveChannel();
    // }

    client?.on("user-published", onUserPublish);
    client.on("user-unpublished", onUserUnpublish);

    console.log("Trying to JOIN : ", agoraDatum);
    console.log("uid for doctor>>>>>>>>>>>>>>>", agoraDatum.uid);

    if (!isJoined) {
      try {
        setClientState("CONNECTING");
        const res = await client?.join(
          appid,
          agoraDatum.channelName,
          agoraDatum.token,
          agoraDatum.uid
        );
        console.log(
          "rresponse of client.join>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
          res
        );

        if (res) {
          // await publishTracks();
          setIsJoined(true);
          setClientState("CONNECTED");
          setIsReadyToPublish(true);
        }
      } catch (error) {
        console.error("Error joining channel:", error);
        setClientState("DISCONNECTED");
        setIsReadyToPublish(false);
      }
    }
  };

  useEffect(() => {
    if (isReadyToPublish) {
      _publishTracks();
    }
  }, [isReadyToPublish, remoteVideoContainerRef]);

  const _publishTracks = async () => {
    await publishTracks();
  };

  const publishTracks = async () => {
    if (!isReadyToPublish) {
      console.log("Not ready to publish tracks yet");
      return;
    }

    try {
      console.log("Publishing tracks...");

      await client.publish([audioTrack, videoTrack]);

      console.log("Tracks published successfully");

      setIsVideoPubed(true);

      setIsAudioPubed(true);
    } catch (error) {
      console.error("Failed to publish tracks:", error);

      if (error.code === "INVALID_OPERATION") {
        console.log("Attempting to rejoin channel...");
        await joinChannel();
        // After rejoining, try to publish again
        await publishTracks();
      }
    }
  };

  /// handle camera
  const turnOnCamera = async (flag) => {
    flag = flag ?? !isVideoOn;
    setIsVideoOn(flag);

    if (videoTrack) {
      return videoTrack.setEnabled(flag);
    }
    videoTrack = await AgoraRTC.createCameraVideoTrack();
    videoTrack.play("camera-video");
  };

  /// handle mic
  const turnOnMicrophone = async (flag) => {
    flag = flag ?? !isAudioOn;
    setIsAudioOn(flag);

    if (audioTrack) {
      return audioTrack.setEnabled(flag);
    }

    audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    // audioTrack.play();
  };

  const leaveChannel = async () => {
    setIsJoined(false);
    setIsAudioPubed(false);
    setIsVideoPubed(false);

    setClientState("DISCONNECTED");
    setIsReadyToPublish(false);

    await client.leave();
    videoTrack.setEnabled(false);
    audioTrack.setEnabled(false);
    Router.push("/consultation");
  };

  const endCall = async () => {
    setIsJoined(false);
    setIsAudioPubed(false);
    setIsVideoPubed(false);
    setClientState("DISCONNECTED");
    setIsReadyToPublish(false);

    // const response = await updateCommonData(
    //   { status: 4 },
    //   `consultation/consultation-booking/${id}`
    // );

    await client.leave();

    // videoTrack.setEnabled(false);
    // audioTrack.setEnabled(false);

    Router.push("/consultation");
  };

  // const onUserPublish = async (user, mediaType) => {
  //   console.log("ON USER PUBLISH : ", user, mediaType);

  //   if (mediaType === "video") {
  //     const remoteTrack = await client.subscribe(user, mediaType);
  //     remoteTrack.play("remote-video");
  //     setIsVideoSubed(true);
  //   }
  //   if (mediaType === "audio") {
  //     const remoteTrack = await client.subscribe(user, mediaType);
  //     remoteTrack.play();
  //   }

  //   // try {
  //   //   await client.subscribe(user, mediaType);

  //   //   console.log("Subscribed to user");

  //   //   if (mediaType === "video") {
  //   //     const remoteVideoTrack = user.videoTrack;

  //   //     remoteVideoTrack.play("remote-video");

  //   //     setIsVideoSubed(true);
  //   //   }

  //   //   if (mediaType === "audio") {
  //   //     const remoteAudioTrack = user.audioTrack;

  //   //     remoteAudioTrack.play();
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Error subscribing to user: ", error);
  //   // }
  // };

  const onUserPublish = async (user, mediaType) => {
    console.log("ON USER PUBLISH : ", user, mediaType);

    await client.subscribe(user, mediaType);
    console.log("Successfully subscribed to user", user);

    if (mediaType === "video") {
      const remoteTrack = user.videoTrack;
      console.log("Remote video track:", remoteTrack);
      if (remoteTrack) {
        // const remoteContainer = document.getElementById("remote-video");
        const remoteVideoDiv = document.createElement("div");
        remoteVideoDiv.id = `remote-video`;
        // remoteVideoDiv.height = "100%";
        // remoteVideoDiv.width = "100%";
        remoteVideoDiv.className = "remote-video";
        remoteVideoContainerRef.current?.appendChild(remoteVideoDiv);
        remoteTrack.play(remoteVideoDiv);

        console.log("DEBUG hereee", remoteVideoDiv, remoteTrack);
        setIsVideoSubed(true);
      } else {
        console.error("No remote video track found");
      }
    }

    if (mediaType === "audio") {
      const remoteTrack = user.audioTrack;
      console.log("Remote audio track:", remoteTrack);
      if (remoteTrack) {
        remoteTrack.play();
      } else {
        console.error("No remote audio track found");
      }
    }
  };

  const onUserUnpublish = (user, mediaType) => {
    console.log("User Unpublished: ", user, mediaType);

    if (mediaType === "video") {
      const remoteContainer = document.getElementById("remote-video");

      if (remoteContainer) {
        remoteContainer.innerHTML = "";
        remoteVideoContainerRef.current.removeChild(remoteContainer);
      }

      setIsVideoSubed(false);
    }

    if (mediaType === "audio") {
      user.audioTrack?.stop();
    }
  };

  const publishAudio = async () => {
    await turnOnMicrophone(true);

    if (!isJoined) {
      await joinChannel();
    }

    await client.publish(audioTrack);
    setIsAudioPubed(true);
  };

  /// Handle POP scope ( USED TO HANDLE PAGE LEAVE )
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Are you sure you want to leave?";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };
    const handlePopstate = async (event) => {
      const userConfirmed = window.confirm("Are you sure you want to leave?");
      // If the user clicks "Cancel," prevent the default behavior
      // history.pushState(null, "", router.asPath);
      console.log("GO BACK L", userConfirmed);
      event.preventDefault();
      if (userConfirmed) {
        await client?.leave();
        Router.push("/");
      } else {
        await client?.leave();
        window.history.pushState({}, "", "");
      }
    };
    // Add the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopstate);

    // Remove the event listener when the component unmounts
    return async () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopstate);

      /// video sdk destroy related codes
      await client?.leave();
      videoTrack?.setEnabled(false);
      audioTrack?.setEnabled(false);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {agoraDatum && client && AgoraRTC ? (
        <>
          <div className="grid grid-cols-12" height={"100vh"}>
            <div className="col-span-12 md:col-span-8 bg-red-500 ">
              <div
                style={{
                  backgroundColor: "black",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  color: "white",
                  overflow: "hidden",
                }}
              >
                <div
                  ref={remoteVideoContainerRef}
                  className={`flex justify-center items-center h-full ${
                    !isVideoSubed ? "text-white text-lg font-semibold" : ""
                  }`}
                >
                  {!isVideoSubed ? (
                    // <div className="flex justify-center flex-col items-center h-full text-white text-lg font-semibold">
                    <>Asking Doctor to Join...</>
                  ) : (
                    // </div>
                    // <div
                    //   ref={remoteVideoContainerRef}
                    //   className="flex justify-center items-center flex-col h-full"
                    // >
                    //   {/* <video
                    //     // style={{ backgroundColor: "black" }}
                    //     id="remote-video"
                    //     hidden={false}
                    //     style={{ width: "100%", height: "100%" }}
                    //   ></video> */}
                    // </div>
                    <></>
                  )}
                </div>
                {/* {!isVideoSubed ? (
                  <div className="flex justify-center flex-col items-center h-full text-white text-lg font-semibold">
                    Asking Doctor to Join...
                  </div>
                ) : (
                  <div className="flex justify-center items-center flex-col h-full">
                    <video
                      style={{ width: "100%", height: "100%" }}
                      id="remote-video"
                      hidden={false}
                    ></video>
                  </div>
                )} */}
              </div>
              <div className="h-[120px] max-w-[180px] bg-[#EFEBE6] absolute rounded-sm top-5 md:top-7 lg:top-10 right-5 md:right-7 lg:right-10 overflow-hidden">
                <video
                  id="camera-video"
                  hidden={isVideoOn ? false : true}
                  height={"100%"}
                ></video>
              </div>

              <div className="flex justify-center flex-row items-center absolute bottom-7 w-full">
                <div
                  className="mx-1.5"
                  style={{
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    turnOnMicrophone(!isAudioOn);
                  }}
                >
                  <img src={`/images/audio_${isAudioOn ? "on" : "off"}.svg`} />
                </div>
                <div
                  className="mx-1.5"
                  style={{
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={endCall}
                >
                  <img src={"/images/end_call.svg"} className="w-[50px]" />
                </div>
                <div
                  className="mx-1.5"
                  style={{
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    turnOnCamera(!isVideoOn);
                  }}
                >
                  <img src={`/images/video_${isVideoOn ? "on" : "off"}.svg`} />
                </div>
              </div>
            </div>
            {/* <Hidden smDown>
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                bgcolor={"#EFEBE6"}
                height={"100%"}
              >
                <ConsultationChatView id={id} />
              </Grid>
            </Hidden> */}
            <div className="hidden sm:block col-span-12 md:col-span-4">
              {/* <ConsultationChatView id={id} /> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <SpinnerLoader />
        </>
      )}
    </div>
  );
}

Index.layout = null;

export default Index;
