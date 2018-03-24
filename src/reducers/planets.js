export default function(state=[],action = null){

	switch(action.type){
		case "INITIAL_DATA":
			return {
				...state,
				...action.payload
			}
		case "SEARCH_TERM_CHANGED":
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}