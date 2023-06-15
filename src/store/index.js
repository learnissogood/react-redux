// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const reduceFunction = (state = { counter: 0 }, action) => {
//   if (action.type === "increase-counter") {
//     return { counter: state.counter + 1 };
//   }

//   if (action.type === "decrease-counter") {
//     return { counter: state.counter - 1 };
//   }

//   if (action.type === "add-by-10") {
//     return { counter: state.counter + action.payload };
//   }
//   return state;
// };

const counterSlice = createSlice({
  name: "counter2",
  initialState: { counter2: 0 },
  reducers: {
    increment(state, action) {
      state.counter2++;
    },
    decrement(state, action) {
      state.counter2--;
    },
    addBy(state, action) {
      state.counter2 += action.payload;
    },
  },
});

const store = {
//   store1: createStore(reduceFunction),
  store: configureStore({
    reducer: counterSlice.reducer,
  }),
};

export const actions = counterSlice.actions;
export default store;
