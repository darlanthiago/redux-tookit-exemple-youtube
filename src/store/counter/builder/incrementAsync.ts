import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { counterIncrementAsync } from "../slice";
import { ICounterProps } from "../types";

export const incrementAsyncBuilder = (
  builder: ActionReducerMapBuilder<ICounterProps>
) => {
  builder.addCase(counterIncrementAsync.fulfilled, (state, action) => {
    state.counter += action.payload;
    state.loading = false;
  });
  builder.addCase(counterIncrementAsync.pending, (state, action) => {
    state.loading = true;
  });
  builder.addCase(counterIncrementAsync.rejected, (state, action) => {
    console.log("rejected");
    state.loading = false;
  });
};
