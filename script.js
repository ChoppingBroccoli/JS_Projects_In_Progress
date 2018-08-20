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


/*
 ################################################
 function isUniform() takes an array as an argument and returns true if all 
 elements in the array are identical use a loop put the first item in the array
 into a new variable then compare the other items in the array against the 
 first item
 isUniform([1,1,1,1]);  // returns true
 isUniform([2,1,1,1]);  // returns false
 isUniform(["a", "b", "p"]);  // returns false
 isUniform(["b", "b", "b"]);  // returns true */

/* I will come back to this one. Cannot use return statements within the function since
   return statements cause the function to stop immediately. Maybe I need to use a forEach??*/
function isUniform(){
	var newArray = ["b", "b", "c"];
	console.log("Here is your array: " + newArray);
	
	var counter = 0;
	var newItem = 0;
	var arrayItem = newArray[0];
	while(counter < newArray.length) {
		// if newArray[0] === newArray[1]
		if (arrayItem === newArray[counter]) {
			arrayItem = newArray[counter];
			counter++;
			console.log("Counter is: " + counter);
			console.log("true");
		}
		else {
			console.log("false");
		}
				// put newArray[1] into a variable
		// if newArray[1] === newArray[2]
				// put newArray[2] into a variable
		// as soon as newArray[...] != newArray[...] the loop should close and return false
		// otherwise, return true because we have reached the end of the array because all items matched
	}
}

function testThis(...restAnything) {
	console.log("Length " + restAnything.length);
	console.log("Arguments entered: " + restAnything);
	console.log("This is the 2nd index in the array: " + restAnything[1]);
}


// ################################################
// sumArray()
// function accepts an array of numbers and returns the sum of all numbers in the array
// sumArray([1,2,3]);  // returns 6
// sumArray([10,3,10,4]);  // returns 27
// sumArray([-5,100]);  // returns 95

function sumArray([array]) {
	// I need to find out how to accept an array as an argument to a function...
	console.log("Here is the array you entered: " + array); // this doesn't work


}





// ################################################
// max()
// accepts an array of numbers and returns the maximum number in the array
// max([1,2,3]);  // returns 3
// max([10,3,10,4]);  // returns 10
// max([-5,100]);  // returns 100