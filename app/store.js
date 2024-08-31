import counterSlice from "./features/counterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    counterSlice,
  },
});

export default store;
