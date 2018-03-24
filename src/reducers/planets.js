import axios from 'axios';

export default function(state=[],action = null){

	switch(action.type){
		case "INITIAL_DATA":
			return {
				...state,
				...action.payload
			}
			break;
		case "SEARCH_TERM_CHANGED":
			return {
				...state,
				...action.payload
			};
			break;
		default:
		return state;
	}
}