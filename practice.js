// function fizzbuzz(){
// 	for ( var i = 1; i <= 100; i++){
// 		if (i % 3 === 0){
// 			if (i % 5 === 0){
// 				console.log("fizzbuzz");
// 			} else {
// 				console.log("fizz");
// 			}
// 		} else if (i % 5 === 0){
// 			console.log("buzz");
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }
// console.log(fizzbuzz());


// function factorial(n){
// 	for ( var i = n -1; i > 0; i = i -1){
// 		n = n * i
// 	}
// 	return n;
// }
// console.log(factorial(5));


function fibonacci(n){
	if (n === 1){
		return 1;
	} else if (n === 2){
		return 1;
	} else{
		var firstNum = 1;
		var secondNum = 1;
		for (var i = 1; i<=n-2; i++ ){
			var thirdNum = firstNum + secondNum;
			var fibonacciNum = thirdNum;
			firstNum = secondNum;
			secondNum = thirdNum;
		}
		return fibonacciNum;
	}
}
console.log(fibonacci(20	));















