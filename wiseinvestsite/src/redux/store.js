import { configureStore, createStore } from "@reduxjs/toolkit";
// import { LoginReducer } from "./reducer/LoginReduce";

import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
// export default configureStore({
//     reducer: {
//         login: LoginReducer,
//     },
// });