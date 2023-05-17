import { createStore } from "redux";
import { TodoReducer } from "./Reducers";

const store = createStore(TodoReducer)
export default store