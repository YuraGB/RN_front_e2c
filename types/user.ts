export interface User {
  id: string;
  email: string;
  lastname: string;
  name: string;
  token: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  status: "idle" | "loading" | "success" | "error";
}
