import JSON from 'json';

export default searchTermChanged(term) {
	return({
		type: "SEARCH_TERM_CHANGED",
		payload: item
	});
}