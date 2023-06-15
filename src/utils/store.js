import todoSlice from "./todoSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
