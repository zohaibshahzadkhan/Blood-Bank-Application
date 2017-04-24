import {createStore} from "redux";
import {combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";

import LoginStatusReducer from "./reducers/login/statusreducer"
import LoginErrorMessageReducer from "./reducers/login/statusreducer"
import UserInformation from "./reducers/login/userinfo"
import AvailableDonars from "./reducers/login/availabledonars"


const middleware=applyMiddleware(thunk);
export const rootReducer= combineReducers(
    {
        LoginStatusReducer,
        LoginErrorMessageReducer,
        UserInformation,
        AvailableDonars
    }
)
const store= createStore(rootReducer,middleware);
export default store;
