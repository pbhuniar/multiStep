import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
const RootReducer=combineReducers({
    UserData: UserReducer
})
export default RootReducer