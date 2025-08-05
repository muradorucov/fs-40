import { combineReducers, createStore } from "redux";
import { getAllProductsReducer } from "./reducers/products.reducer";

const reducers = combineReducers({
  products: getAllProductsReducer
})
export const store = createStore(reducers)