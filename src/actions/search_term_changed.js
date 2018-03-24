import axios from 'axios';
import initial_load from "./initial_load";
export default function searchTermChanged(term) {
	if (term.length > 0) {
		return function(dispatch) {
			return axios.get('https://swapi.co/api/planets/?search=' + term)
			  .then(function (response) {
			  	return dispatch({
			  		type: "SEARCH_TERM_CHANGED",
			  		payload: response.data.results
			  	})
			})
			  .catch(function (error) {
			    console.log(error);
			}); 
	}	
	}else{
		return initial_load()
	}
}