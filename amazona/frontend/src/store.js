import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./reducers/cartReducers";
import {
  ProductDetailsReducer,
  ProductListReducer,
} from "./reducers/productReducers";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const reducer = combineReducers({
  productList: ProductListReducer,
  productDetails: ProductDetailsReducer,
  cart: CartReducer,
  userSignIn: userSigninReducer,
  userRegister: userRegisterReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
