// takes a single argument and prints out the elements in the array in reverse order 
// (don't actually reverse the array itself, use a loop)
// EXAMPLE
// printReverse([1,2,3,4]);
//   4
//   3
//   2
//   1

// not sure if this is the riht way to do this since I'm accepting 5 arguments but only one array
// would that count as one argument??
function printReverse([num1, num2, num3, num4, num5]) {
	var newArray = [num1, num2, num3, num4, num5];
	console.log("The Array is " + newArray);
	console.log("The Array in reverse is: ");
	var lastElem = 0;
	for(i = newArray.length; i > 0; i--) {
		lastElem = newArray.pop();
		console.log(lastElem);
		//console.log(newArray[i]);
	}
}


// ################################################
//isUniform()
// function isUniform() takes an array as an argument and returns true if all elements in the array are identical
// use a loop
// put the first item in the array into a new variable then compare the other items in the array against the first item
// isUniform([1,1,1,1]);  // returns true
// isUniform([2,1,1,1]);  // returns false
// isUniform(["a", "b", "p"]);  // returns false
// isUniform(["b", "b", "b"]);  // returns true

function isUniform(){
	var newArray = [1,11,1,1,2];
	console.log("Here is your array: " + newArray);
	var firstItem = newArray[0];
	console.log("The first item is " + firstItem);
	
	for(i = 1; i <= newArray.length; i++) {
		if(firstItem === newArray[i]) {
			console.log("true");
		}
		else {
			console.log("false");
		}
	}


}




// ################################################
// sumArray()
// function accepts an array of numbers and returns the sum of all numbers in the array
// sumArray([1,2,3]);  // returns 6
// sumArray([10,3,10,4]);  // returns 27
// sumArray([-5,100]);  // returns 95

// ################################################
// max()
// accepts an array of numbers and returns the maximum number in the array
// max([1,2,3]);  // returns 3
// max([10,3,10,4]);  // returns 10
// max([-5,100]);  // returns 100