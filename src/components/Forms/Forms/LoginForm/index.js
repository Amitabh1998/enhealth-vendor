import React, { useState, CSSProperties } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import OtpDialog from "../../Dialogs/OtpDialog";
import { loginHandler } from "@/api/auth";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(1);

  const router = useRouter();

  // Email and Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Loadind state
  const [loading, setLoading] = useState(false);

  const emailLogin = async () => {
    // await loginHandler(email, password);

    try {
      setLoading(true);
      const response = await loginHandler(email, password);
      console.log(response);
      localStorage.setItem("enhealthVendorToken", response.accessToken);
      localStorage.setItem("user", response.user);
      router.push("/dashboard");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error ? error : "Something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <div className="font-bold text-gray-800">Welcome to VitMeds</div>
      {state === 1 ? (
        <div>
          <div className="text-gray-500">
            Please enter your phone number to login
          </div>
          <div className="my-5">
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="number"
                id="number"
                className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Enter mobile number"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 bg-blue-50 border border-gray-300 rounded-l-md">
                +91
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-gray-500">
            Please enter your email and password to login
          </div>
          <div className="my-5">
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="w-full text-left">Email</div>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="w-full text-left">Password</div>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      <div
        onClick={() => {
          state === 1 ? setOpen(true) : emailLogin();
        }}
      >
        <PrimaryButton
          loading={loading}
          text={state === 1 ? "OTP" : "Login"}
          color={loading ? "bg-[#cccccc]" : "bg-[#575AE5]"}
        />
      </div>

      <div className="my-4 text-gray-500">OR</div>
      <div onClick={() => setState(state === 2 ? 1 : 2)}>
        <PrimaryButton
          text={
            state === 1
              ? "Login with your Email"
              : "Login with your phone number"
          }
          color={"bg-[#575AE5]"}
        />
      </div>
      <div className="mt-3">
        By Using the app, you agree to{" "}
        <span className="text-orange-500">Terms and conditions</span>
      </div>

      <OtpDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default LoginForm;
