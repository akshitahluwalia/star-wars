export default function deleteSavedItem(item){
	console.log(item);
	let savedItems = JSON.parse(localStorage.getItem("savedItems") || "[]");
	var index;
    for (var i = 0; i < savedItems.length; i++) {
        if (savedItems[i].name == item.name) {
          index=i;
          break;
        }
    }
    savedItems.splice(index, 1);
	localStorage.setItem("savedItems", JSON.stringify(savedItems));
	return({
		type: "DELETING_ITEM",
		payload: item
	});
}