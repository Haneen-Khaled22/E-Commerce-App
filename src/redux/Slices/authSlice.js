import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import * as jose from "jose";
const SECRET_KEY = "secret";
const jwtKey = jose.base64url.decode(SECRET_KEY);

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (user, thunkApi) => {
    try {
      const response = await axiosInstance.get(`users/?email=${user.email}`);

      if (response.data.length == 0) {
        throw new Error("Invalid User");
      }

      if (response.data[0].password != user.password) {
        throw new Error("Invalid User");
      }

       const token = await new jose.SignJWT({
        name: response.data[0].name,
        id: response.data[0].id,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d") // Token expires in 7 days
        .sign(jwtKey);

      localStorage.setItem("token", token);

      return response.data[0];
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
}
}
);

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      const response = await axiosInstance.post("/users", user);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchLoggedInUser = createAsyncThunk(
  "auth/loggedInUser",
  async (_, thunkApi) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const { payload } = await jose.jwtVerify(token, jwtKey);

        const response = await axiosInstance.get(`/users/${payload.id}`);
        return response.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:null,
    loginLoading: false,
    registerLoading: false,
    loginError: "",
    registerError: "",
  },

  reducers:{
    logout:(state)=>{
      state.user=null;
      localStorage.removeItem('token');
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        (state.loginLoading = true), (state.loginError = "");
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        (state.loginLoading = false),
          (state.loginError = false),
          (state.user = action.payload);
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        (state.loginLoading = false), (state.loginError = action.payload);
      });

    builder
      .addCase(fetchRegister.pending, (state) => {
        (state.registerLoading = true), (state.registerError = "");
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        (state.registerLoading = false),
          (state.registerError = false),
          (state.user = action.payload);
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        (state.registerLoading = false), (state.registerError = action.payload);
      })
      .addCase(fetchLoggedInUser.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.loginError = false;
        state.user = action.payload; 
       
      });
  },

});

export const {logout} = authSlice.actions
export default authSlice.reducer;
