import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import Cookies from 'js-cookie';

const cartItems = Cookies.getJSON("cartItems") || [];

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    cart: cartReducer

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer (applyMiddleware(thunk)));

export default store;