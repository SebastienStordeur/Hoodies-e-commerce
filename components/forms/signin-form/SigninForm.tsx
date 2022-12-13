import axios from "axios";
import Link from "next/link";
import React from "react";
import { Button, Form, InputValidator } from "../../";

const SigninForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
    axios
      .post("/api/user/login", {
        email: "test@test.com",
        password: "password",
      })
      .then((res) => console.log(res));
  };

  return (
    <section className="w-96 mx-auto">
      <Form title="Sign In" onSubmit={handleSubmit}>
        <InputValidator id="email" label="Your email" type="email" />
        <InputValidator id="password" label="Your password" type="password" />
        <Button className="mt-4" type="submit">
          Login to your account
        </Button>
        <p className="text-sm font-medium mt-2 text-center">
          Don't have an account? &nbsp;
          <Link href="/signup" className="cursor-pointer text-green font-bold">
            Create one
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SigninForm;
