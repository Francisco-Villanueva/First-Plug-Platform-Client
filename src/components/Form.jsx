"use client";
import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import { AppleIcon, GoogleIcon, MicrosoftIcon } from "@/common/Icons";
import { signIn } from "next-auth/react";

export default function Form({
  title,
  children,
  login = false,
  register = false,
  onSubmit,
  className = "",
}) {
  return (
    <form
      className={`py-40 min-w-[400px] w-[500px] h-screen flex flex-col justify-center gap-6 my-4${className}`}
      onSubmit={onSubmit}
    >
      <h2 className="text-black font-bold text-3xl font-montserrat">{title}</h2>

      {children}

      <div className="flex justify-center items-center gap-4">
        <hr className="border-grey flex-1 " />
        <span className="text-dark-grey flex-2">Or continue with</span>
        <hr className="border-grey  flex-1 " />
      </div>

      <div className="flex justify-center items-center gap-4">
        <Button
          onClick={(e) => {
            e.preventDefault();
            return signIn("google", {
              callbackUrl: "http://localhost:3000/home/dashboard",
            });
          }}
          variant="secondary"
          icon={<GoogleIcon className="w-7 h-7" />}
          className="border-none w-10 h-10 rounded-full"
        />
        <Button
          variant="secondary"
          icon={<AppleIcon className="w-7 h-7" />}
          className="border-none w-10 h-10 rounded-full"
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            return signIn("azure-ad", {
              callbackUrl: "http://localhost:3000/home/dashboard",
            });
          }}
          variant="secondary"
          icon={<MicrosoftIcon className="w-7 h-7" />}
          className="border-none w-10 h-10 rounded-full"
        />
      </div>

      <div className="flex justify-center items-center gap-2">
        {login && (
          <>
            <p>Don`t have an account</p>
            <CustomLink href="/register">Sign Up</CustomLink>
          </>
        )}

        {register && (
          <>
            <p>Already have an account?</p>
            <CustomLink href="/login">Log In</CustomLink>
          </>
        )}
      </div>
    </form>
  );
}
