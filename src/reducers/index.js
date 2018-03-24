import { combineReducers } from 'redux';
import planetReducer from "./planets";
const rootReducer = combineReducers({
	planets: planetReducer
});
export default rootReducer