import Link from "next/link";
import React from "react";
import { Button, Form, InputValidator } from "../../";

const SigninForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <section className="w-96 mx-auto">
      <Form title="Sign In" onSubmit={handleSubmit}>
        <InputValidator id="email" label="Your email" type="email " />
        <InputValidator id="password" label="Your password" type="password" />
        <Button type="submit">Login to your account</Button>
        <p className="text-sm font-medium mt-2 text-center">
          Don't have an account?
          <Link href="/signup" className="cursor-pointer text-orange font-bold">
            Create one
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SigninForm;
