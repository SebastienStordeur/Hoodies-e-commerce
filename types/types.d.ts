/** Define the initial state of auth state */

export type AuthSliceState = {
  isAuthenticated: boolean;
  user: {
    id: string | null;
    fullName: string | null;
    cart: [];
  };
};
