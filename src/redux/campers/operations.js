import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axiosInstance";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (filters, thunkApi) => {
    try {
      const { data } = await axiosInstance.get("", { params: { ...filters } });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
