/** Define a new user when signing up */

export type NewUser = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
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
