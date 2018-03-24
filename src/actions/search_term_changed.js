import axios from 'axios';
export default function searchTermChanged(term) {
	return function(dispatch) {
		return axios.get('https://swapi.co/api/planets/?search=' + term)
			  .then(function (response) {
			  	return dispatch({
			  		type: "SEARCH_TERM_CHANGED",
			  		payload: response.results
			  	})
			  })
			  .catch(function (error) {
			    console.log(error);
			  }); 
	}	
}