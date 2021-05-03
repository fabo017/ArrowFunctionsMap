
//ES5 Map Callback

/*function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }*/

//ES2015 Arrow Functions Shorthand
const double = arr => arr.map(num => num *2);


//ES5 Map Callback

/*function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}*/

//ES2015 Arrow Functions Shorthand

const squareAndFindEvens = nums => nums.map(n => n ** 2).filter(square => square % 2 === 0);
