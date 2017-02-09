'use strict'

const Lesson1 = {
 computeAverage: function(a, b, c) {
 	var avg = (a + b + c) / 3;
 	return avg;
   
 },
 
 computeFactorial: function(n) {
 	if (n === 1) {
 		return 1;
 	}
 	else {
 		return n * Lesson1.computeFactorial(n - 1);
 	} 
 },

 convertTempCtoF: function(n) {
 	var Fah = ((9/5) * n) + 32;
  	return Fah; 
 },

 convertTempFtoC: function(n) {
 	var cel = (5/9) * (n - 32);
  	return cel;
 }
}

module.exports = Lesson1;