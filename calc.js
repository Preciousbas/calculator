console.log("A simple calculator to perform basic arithmetic operations");

var operation= window.prompt("Enter the operation you wish to perform: + for addition, - for subtraction, / for division, * for multiplication");
const x = parseFloat(window.prompt("Enter your first number: "));
const y = parseFloat(window.prompt("Enter your first number: "));

if (operation=='+'){
	let z = x+y;
	document.write(x + " + " + y + " = " + z);
}

else if (operation=='-'){
	let z = x-y;
	document.write(x + " - " + y + " = " + z);
}

else if (operation=='*'){
	
	let z = x*y;
	document.write(x + " x " + y + " = " + z);
}

else if (operation=='/'){
	
	let z = x+y;
	document.write(x + " ÷ " + y + " = "  + z);
}

else {
	document.write("You've not selected a valid operation");
}

