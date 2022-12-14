export function loginFormValidation(user: any, setErrors: any) {
  if (user.email.trim() === "") {
    setErrors((prev: any) => {
      return {
        ...prev,
        emailHasError: true,
        emailErrorMessage: "Can't be empty",
      };
    });
  } else {
    setErrors((prev: any) => {
      return {
        ...prev,
        emailHasError: false,
        emailErrorMessage: "",
      };
    });
  }
}
