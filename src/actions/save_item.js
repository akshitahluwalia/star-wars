import JSON from 'json';

export default saveItem(item) {
	let savedItems = JSON.parse(localStorage.getItem("savedItems") || "[]");
	savedItems.push(item);
	localStorage.setItem("savedItems", JSON.stringify(savedItems));
	return({
		type: "PERSISTING_ITEM",
		payload: item
	});
}