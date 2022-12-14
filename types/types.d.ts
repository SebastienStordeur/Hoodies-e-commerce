/** Define a new user when signing up */

export type NewUser = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

/** Define the user that is going to log in */

export type LoginUser = {
  email: string;
  password: string;
};

/** Define the initial state of auth state */

export type AuthSliceState = {
  isAuthenticated: boolean;
  user: {
    id: string | null;
    fullName: string | null;
    cart: [];
  };
};
