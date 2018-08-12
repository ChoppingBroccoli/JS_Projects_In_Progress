// takes a single argument and prints out the elements in the array in reverse order 
// (don't actually reverse the array itself, use a loop)
// EXAMPLE
// printReverse([1,2,3,4]);
//   4
//   3
//   2
//   1

function printReverse(num) {
	var newArray = [num];
	console.log(newArray);

	// while the length of the array != 0 print each element
	// find the list item in the array and print it
	// decrement a value to get to the next index then print it
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