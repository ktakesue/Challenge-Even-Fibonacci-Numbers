/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  let first = 1; 
  let second = 2;
  let holder = 0;
  console.log(maxFibValue);

  while(second <= maxFibValue){
    holder = first + second;
    first = second;
    second = holder;

    if(first % 2 === 0){
    sum += first;
    }
  }
  
  return sum;
}

// bonus round
function _highestFibonacciNumber ( maxFibValue ){
  var highest = 0;
  let first = 1; 
  let second = 2;
  let holder = 0;

  //define your base case, validate your input
  while(second <= maxFibValue){
    holder = first + second;
    first = second;
    highest = second;
    second = holder;
  }
  //do your work here
  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};