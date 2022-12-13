export function signupFormValidation(user: any, setErrors: any) {
  const passwords: string[] = [user.password, user.confirmPassword];
  passwordValidation(passwords, setErrors);
}

function passwordValidation(passwords: string[], setErrors: any) {
  const passwordSet: Set<string> = new Set(passwords);

  identicalPasswords(passwordSet, setErrors);
  if (passwordSet.size === 1) {
    isPasswordLongerThan8(passwordSet, setErrors);
  }
}

function identicalPasswords(passwords: Set<string>, setErrors: any) {
  console.log(passwords);
  if (passwords.size === 1) {
    setErrors((prev: any) => {
      return {
        ...prev,
        passwordHasError: false,
        passwordMessageError: "",
      };
    });
    return true;
  } else {
    setErrors((prev: any) => {
      return {
        ...prev,
        passwordHasError: true,
        passwordMessageError: "Your passwords must be identical",
      };
    });
    return false;
  }
}

function isPasswordLongerThan8(passwordSet: Set<string>, setErrors: any) {
  const password = Array.from(passwordSet).join();
  console.log(password);
  if (password.length >= 8) {
    setErrors((prev: any) => {
      return {
        ...prev,
        passwordHasError: false,
        passwordMessageError: "",
      };
    });
  } else {
    setErrors((prev: any) => {
      return {
        ...prev,
        passwordHasError: true,
        passwordMessageError: "Your password should be at least 8 characters",
      };
    });
    return;
  }
}
