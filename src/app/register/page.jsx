import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import Input from "@/common/Input";
import Form from "@/components/Form";
import Image from "next/image";

export default function page() {
  return (
    <section className="flex">
      <Image
        src="/firstpluigthelast.jpg"
        alt="img"
        width={540}
        height={960}
        className="w-[50%] h-screen p-15 object-cover"
      />

      <article className="w-[50%] h-screen flex justify-center">
        <Form title="Welcome Back!" register>
          <Input title="Full Name" placeholder="Placeholder" />
          <Input title="Email" placeholder="user@mail.com" />
          <Input title="Password" type="password" />
          <Button body="Log In" variant="primary" size="big" />
        </Form>
      </article>
    </section>
  );
}