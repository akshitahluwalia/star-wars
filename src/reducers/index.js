import { combineReducers } from 'redux';
import planetReducer from "./planets";
import savedItems from "./saved_items"
const rootReducer = combineReducers({
	planets: planetReducer,
	savedItems: savedItems
});
export default rootReducer