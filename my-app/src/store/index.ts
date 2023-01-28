import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "../components/home/productReducer";


export const rootReducer = combineReducers({
    product: productReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
