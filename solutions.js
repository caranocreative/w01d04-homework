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


// "Commit 3 - Digit Sum"

const sumDigits = (num) => {
	num = num.toString();
	let returnValue = 0;
	for (i = 0; i < num.length; i++) {
		returnValue += parseInt(num[i]);
	}
	return returnValue;
}

console.log("digits = 123");
console.log(sumDigits(123));

console.log("digits = 12345");
console.log(sumDigits(12345));