// import { createSlice } from "@reduxjs/toolkit";

import UserActionsTypes from "./actionTypes";

// export const LoginReducer = createSlice({
//     name: "typePerson",
//     initialState: {
//         currentUser: {
//             loggined: false,
//             isAdmin: 4,
//             jwt: "",
//         },
//     },
//     reducers: {
//         setUser: (state, payload) => {
//             console.log("before", state); //init state
//             state.currentUser.loggined = true;
//             state.currentUser.isAdmin = 4;
//             state.currentUser.jwt = "";
//             console.log("after", state); // here I have new state but...
//         },
//     },
// });
// export const { setUser } = LoginReducer.actions;
// export default LoginReducer.reducer;

const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    // colocar switch posteriormente

    switch (action.type) {
        case UserActionsTypes.LOGIN:
          return { ...state, currentUser: action.payload };
          break;
        case UserActionsTypes.LOGOUT:
            localStorage.clear();
            return { ...state, currentUser: null };
          break;
        case UserActionsTypes.UPPLAN:
            localStorage.clear();
            return { ...state, currentUser: action.payload };
          break;
        default:
          return state;
      }

    // if (action.type === UserActionsTypes.LOGIN) {
    //     return { ...state, currentUser: action.payload };
    // }
    // if (action.type === UserActionsTypes.LOGOUT) {
    //     localStorage.clear();
    //     return { ...state, currentUser: null };
    // }

    // return state;
};

export default userReducer;
