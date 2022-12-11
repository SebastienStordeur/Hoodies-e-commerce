import axios from "axios";
import React from "react";
import { Form, InputValidator } from "../../";
import { Button } from "../../";

const SignupForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      name: "Sebastien Stordeur",
      email: "stordeursebastien0@gmail.com",
      password: "password",
    };
    axios.post("/api/user/signup", { newUser }).then((res) => console.log(res));
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
