// console.log("javascript is running");


// Commit 1 - Verbal questions
// What is the difference between a parameter and an argument? 
// 		parameter is a variable listed as a part of the function
// 		arguments are vales pass to the function when invoked
// Within a function, what is the difference between return and console.log?
// 		console.log is for the developer and shows in the console to debug
// 		return returns the function in the code


// Commit 2 - Palindrome"


const reverseWord = (str) => {
	let returnValue = "";
	for (i = str.length - 1; i >= 0; i--) {
		returnValue += str[i];
	}
	return returnValue;
}
const checkPalindrome = (str) => {
	return reverseWord(str.toLowerCase()) == str.toLowerCase();
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
