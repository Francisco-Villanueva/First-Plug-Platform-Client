"use client";
import Image from "next/image";
import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import Input from "@/common/Input";
import Form from "@/components/Form";

import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";
import { signIn } from "next-auth/react";

export default function Login() {
  const emailInput = useInput("", "email");
  const passWordInput = useInput("", "password");

  const router = useRouter();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const responseNextAuth = await signIn("credentials", {
        email: emailInput.value,
        password: passWordInput.value,
        redirect: false,
      });

      router.push("/home/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex">
      <Image
        src="/firstpluig.png"
        alt="img"
        width={540}
        height={960}
        className="w-[50%] h-screen p-15 object-cover"
        priority
      />

      <article className="w-[50%] h-screen flex justify-center">
        <Form title="Welcome Back!" login onSubmit={handleSumbit}>
          <div>
            <Input
              title="Email"
              placeholder="user@mail.com"
              {...emailInput}
              required
            />

            <Input
              title="Password"
              type="password"
              placeholder="Password"
              {...passWordInput}
              required
            />
          </div>
          <CustomLink href="/login" className="text-right">
            Forgot Password ?
          </CustomLink>
          <Button
            body="Log In"
            variant="primary"
            className="rounded-md "
            size="big"
          />
        </Form>
      </article>
    </section>
  );
}
