import React from "react";
import { Button, Form, InputValidator } from "../../";

const SigninForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <Form title="Sign In" onSubmit={handleSubmit}>
      <InputValidator id="email" label="Your email" type="email " />
      <InputValidator id="password" label="Your password" type="password " />
      <Button type="submit">SignIn to your account</Button>
    </Form>
  );
};

export default SigninForm;
