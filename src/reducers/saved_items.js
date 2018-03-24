export default function(state=[],action = null){
	switch(action.type){
		default:
			return {
				savedItems: JSON.parse(localStorage.getItem("savedItems") || "[]")
			}
	}
}