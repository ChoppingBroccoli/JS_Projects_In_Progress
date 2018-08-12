var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input != "quit") {
	if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		// ask for new todo
		var newTodo = prompt("What is the new item?");
		// add to todos array
		todos.push(newTodo);
	}
	// ask again for new input
	var input = prompt("What would you like to do?");	
}
console.log("You quit the app");