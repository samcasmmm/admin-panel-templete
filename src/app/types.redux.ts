export interface User {
  name: string;
  role: string;
}

export interface LoginState {
  user: User | null;
  isLoggedIn: boolean | null;
  token: string | null;
  error: string | null;
}
export interface RegisterState {
  user: User | null;
  isLoggedIn: boolean | null;
  token: string | null;
  error: string | null;
}

// API Request and Respone Types

export interface SendOTPRequest {
  phone: string;
}

export interface SendOTPResponse {
  data: any;
}

export interface VerifyOTPRequest {
  username: string;
  password: string;
}

export interface VerifyOTPResponse {
  data: {};
}
