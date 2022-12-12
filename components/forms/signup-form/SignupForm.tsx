import axios from "axios";
import Link from "next/link";
import React from "react";
import { Form, InputValidator } from "../../";
import { Button } from "../../";

const SignupForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      firstName: "Sebastien",
      lastName: "Stordeur",
      email: "stordeursebastien0@gmail.com",
      password: "password",
    };
    axios
      .post("/api/user/signup", {
        firstName: "Sebastien",
        lastName: "Stordeur",
        email: "stordeursebastien0@gmail.com",
        password: "password",
      })
      .then((res) => console.log(res));
    console.log("submit");
  };
  return (
    <section className="w-96 mx-auto">
      <Form title="Sign Up" onSubmit={handleSubmit}>
        <InputValidator id="name" label="Your name" type="text" />
        <InputValidator id="email" label="Your email" type="email" />
        <InputValidator id="password" label="Your password" type="password" />
        <InputValidator
          id="confirm-password"
          label="Confirm your password"
          type="password"
        />
        <Button className="mt-4" type="submit">
          Create your account
        </Button>
        <p className="text-sm font-medium mt-2 text-center">
          Don't have an account?
          <Link href="/signin" className="cursor-pointer text-orange font-bold">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SignupForm;
