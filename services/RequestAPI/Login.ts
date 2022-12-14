import axios from "axios";

export function login(user: any, setErrors: any, success: any) {
  try {
    const { email, password } = user;
    axios
      .post("/api/user/login", { email, password })
      .then((res) => {
        console.log(res.data.success);
        setErrors((prev: any) => {
          return {
            ...prev,
            error: false,
            message: "",
          };
        });
        return success(res.data.success);
      })
      .catch((err) => {
        console.error(err);
        setErrors((prev: any) => {
          return {
            ...prev,
            error: true,
            message: "Wrong email/password combination",
          };
        });
      });
  } catch (error) {
    setErrors((prev: any) => {
      return {
        ...prev,
        error: true,
        message: "Wrong email/password combination",
      };
    });
  }
}
