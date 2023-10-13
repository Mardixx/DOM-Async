/* const in1Second = Date.now() + 1000;
let operations = 0;

console.log("Before the delay");

// This loop is executed until we reach the in1Second timestamp
while (Date.now() < in1Second) {
	operations += 1;
}

console.log("After the delay");
console.log("We could have done " + operations + " operations in that time."); */ //Wrong way

/* console.log("Before the delay");
setTimeout(() => console.log("After 1s"), 1000);
console.log("After the delay");   //Right way */

const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);

fetchName("kimi")
	.then((response) => response.json())
	.then((json) => {
		console.log(json.age);
		console.log(json.count);
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});