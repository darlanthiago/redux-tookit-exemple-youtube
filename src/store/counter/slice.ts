import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { incrementAsyncBuilder } from "./builder/incrementAsync";
import { counterInitialState } from "./initialState";

export const counterIncrementAsync = createAsyncThunk(
  "incrementAsync",
  async (amount: number) => {
    const response = await new Promise<{ data: number }>((resolve) => {
      setTimeout(() => resolve({ data: amount }), 2000);
    });

    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    counterIncrement: (state) => {
      state.counter += 1;
    },
    counterDecrement: (state) => {
      state.counter -= 1;
    },
    counterIncreaseByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    countIncreaseIfOdd: (state) => {
      if (state.counter % 2 !== 0) state.counter += 1;
    },
    countReset: (state) => {
      state.counter = counterInitialState.counter;
    },
  },
  extraReducers: (builder) => {
    incrementAsyncBuilder(builder);
  },
});

// Action creators are generated for each case reducer function
export const {
  counterIncrement,
  counterDecrement,
  counterIncreaseByAmount,
  countIncreaseIfOdd,
  countReset,
} = counterSlice.actions;

export default counterSlice.reducer;
