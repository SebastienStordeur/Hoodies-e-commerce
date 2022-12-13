import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { Form, InputValidator } from "../../";
import { Button } from "../../";
import { signupFormValidation } from "../../../services/formValidation/SignupFornValidation";

const SignupForm = () => {
  const [formHasError, setFormHasError] = useState({
    passwordHasError: false,
    passwordMessageError: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const newUser = {
      fullName: "Sebastien Stordeur",
      email: "test@test.com",
      password: "password",
      confirmPassword: "password",
    };
    event.preventDefault();
    /*     axios
      .post("/api/user/signup", {
        firstName: "Sebastien",
        lastName: "Stordeur",
        email: "test@test.com",
        password: "password",
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err)); */
    signupFormValidation(newUser, setFormHasError);
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
        {formHasError.passwordHasError && (
          <p className="text-red font-semibold text-sm">
            {formHasError.passwordMessageError}
          </p>
        )}
        <Button className="mt-4" type="submit">
          Create your account
        </Button>
        <p className="text-sm font-medium mt-2 text-center">
          Don't have an account? &nbsp;
          <Link href="/signin" className="cursor-pointer text-green font-bold">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SignupForm;
