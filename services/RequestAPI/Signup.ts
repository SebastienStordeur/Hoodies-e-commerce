import axios from "axios";

export function signup(user: any) {
  try {
    const { fullName, email, password } = user;

    axios
      .post("/api/user/signup", {
        fullName,
        email,
        password,
      })
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.error(error);
  }
}
