import "@/styles/globals.css";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { authUser } from "@/apis/auth";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  let DefaultLayout = Layout;
  if (Component.layout === null) DefaultLayout = React.Fragment;
  else if (Component.layout) DefaultLayout = Component.layout;

  const authHandler = async () => {
    try {
      if (["/", "/signup"].includes(router.pathname)) {
        return;
      }
      const response = await authUser();
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("enhealthVendorToken", response.accessToken);

      if (
        response.user.profile &&
        Object.keys(response.user.profile).length > 0
      ) {
        console.log(response.user.profile);
        if (response?.user?.profile?.ownerIdProof.length === 0) {
          console.log(response.user.name);
          router.push("/onboarding");
        } else {
          if (response.user.status === 2) {
            router.push("/pending");
          } else {
            // router.push("/dashboard");
          }
        }
      } else {
        router.push("/onboarding");
      }
    } catch (error) {
      console.log(error);
      // toast.error(
      //   error && error === "accessToken is required"
      //     ? "Access denied! Login to continue"
      //     : "Something went wrong"
      // );
      router.push("/");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("enhealthVendorToken");
    console.log(token);
    if (!token) {
      if (router.pathname === "/login" || router.pathname === "/signup") {
        return;
      } else {
        router.push("/");
      }
    } else {
      // if (router.pathname === "/" || router.pathname === "/signup") {
      //   return;
      // } else {
      const response = authHandler();
      //    }

      // router.push(router.pathname);
    }
  }, [router.pathname]);

  return (
    <>
      <ToastContainer />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
