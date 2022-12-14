import axios from "axios";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Form, InputValidator } from "../../";
import { Button } from "../../";
import { signupFormValidation } from "../../../services/formValidation/SignupFormValidation";
import { signup } from "../../../services/RequestAPI/Signup";

const SignupForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const [formHasError, setFormHasError] = useState({
    emailHasError: false,
    emailMessageError: "",
    passwordHasError: false,
    passwordMessageError: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      fullName: nameInputRef.current!.value,
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
      confirmPassword: confirmPasswordInputRef.current!.value,
    };

    signupFormValidation(newUser, setFormHasError);
    if (!formHasError.emailHasError && !formHasError.passwordHasError) {
      signup(newUser);
    }
  };
  return (
    <section className="w-96 mx-auto">
      <Form title="Sign Up" onSubmit={handleSubmit}>
        <InputValidator
          id="name"
          label="Your name"
          type="text"
          ref={nameInputRef}
        />
        <InputValidator
          id="email"
          label="Your email"
          type="email"
          ref={emailInputRef}
        />
        <InputValidator
          id="password"
          label="Your password"
          type="password"
          ref={passwordInputRef}
        />
        <InputValidator
          id="confirm-password"
          label="Confirm your password"
          type="password"
          ref={confirmPasswordInputRef}
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
