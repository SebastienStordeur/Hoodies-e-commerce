import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button, Form, InputValidator } from "../../";
import { login } from "../../../services/RequestAPI/Login";
import { loginFormValidation } from "../../../services/formValidation/LoginFormValidation";
import ErrorMessage from "../Validators/ErrorMessage";

const SigninForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [loginError, setLoginError] = useState({
    emailHasError: false,
    emailErrorMessage: "",
    error: false,
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  //let isSuccess: boolean;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value,
    };

    loginFormValidation(user, setLoginError);
    login(user, setLoginError, setIsSuccess);

    if (isSuccess) {
      //localStorage + redux
      console.log("LOGIN SUCCESSFULLY");
    }
  };

  return (
    <section className="w-full max-w-sm px-1 mx-auto">
      <Form title="Sign In" onSubmit={handleSubmit}>
        <InputValidator
          id="email"
          label="Your email"
          type="email"
          ref={emailInputRef}
        />
        {loginError.emailErrorMessage && (
          <ErrorMessage message={loginError.emailErrorMessage} />
        )}
        <InputValidator
          id="password"
          label="Your password"
          type="password"
          ref={passwordInputRef}
        />
        <div className="text-center">
          <Button className="my-4" type="submit">
            Login to your account
          </Button>
          {loginError.error && <ErrorMessage message={loginError.message} />}
        </div>
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
