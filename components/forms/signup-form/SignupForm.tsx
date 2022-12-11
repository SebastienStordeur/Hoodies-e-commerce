import React from "react";
import Form from "../../layout/Form";
import { Button } from "../../";
import InputValidator from "../Validators/InputValidator";

const SignupForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <Form title="Sign Up" onSubmit={handleSubmit}>
      <InputValidator id="name" label="Your name" type="text" />
      <InputValidator id="email" label="Your email" type="email" />
      <InputValidator id="password" label="Your password" type="password" />
      <InputValidator
        id="confirm-password"
        label="Confirm your password"
        type="password"
      />
      <Button type="submit">Create your account</Button>
    </Form>
  );
};

export default SignupForm;
