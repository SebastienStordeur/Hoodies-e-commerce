export function signupFormValidation(user: any, setErrors: any) {
  const email: string = user.email;
  const passwords: string[] = [user.password, user.confirmPassword];

  validateEmail(email, setErrors);
  passwordValidation(passwords, setErrors);
}

function passwordValidation(passwords: string[], setErrors: any) {
  const passwordSet: Set<string> = new Set(passwords);

  identicalPasswords(passwordSet, setErrors);
  if (passwordSet.size === 1) {
    isPasswordLongerThan8(passwordSet, setErrors);
  }
}

function validateEmail(email: string, setErrors: any) {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (email.trim() === "") {
    setErrors((prev: any) => {
      return {
        ...prev,
        emailHasError: true,
        emailMessageError: "Can't be empty",
      };
    });
    return;
  } else if (email.trim() !== "" && !emailRegex.test(email)) {
    setErrors((prev: any) => {
      return {
        ...prev,
        emailHasError: true,
        emailMessageError: "Wrong email format",
      };
    });
    return;
  } else {
    setErrors((prev: any) => {
      return {
        ...prev,
        emailHasError: false,
        emailMessageError: "",
      };
    });
  }
}

function identicalPasswords(passwords: Set<string>, setErrors: any) {
  if (passwords.size === 1) {
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
        passwordMessageError: "Your passwords must be identical",
      };
    });
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
