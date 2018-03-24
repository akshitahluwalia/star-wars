import axios from 'axios';
export default function initial_load(){
	return(function(dispatch){
		axios.get('https://swapi.co/api/planets/')
			  .then(function (response) {
			    console.log(response);
			    dispatch({type:"INITIAL_DATA" ,payload: response.data.results});
			  	})
			  .catch(function (error) {
			    console.log(error);
			})
	});
}