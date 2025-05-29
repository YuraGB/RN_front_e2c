import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuthThunk } from "./authThunks";
import { AuthState, User } from "@/types/user";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      if (action.payload) {
        state.isAuthenticated = true;
      }
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkAuthThunk.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(checkAuthThunk.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setUser, logout, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
