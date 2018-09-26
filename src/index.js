module.exports = function getZerosCount(number, base) {
  // your implementation
  //Поиск простых чисел до base
  let simpleNumbers = [];
  function isPrime(num) {    
    for (let i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
  }

  for(var i = 2; i < base; i++){
    if(isPrime(i)) simpleNumbers.push(i);
  }

  //Поиск максимального простого делителя для base
  let maxDevider = {number: base, power: 1 };
  while (simpleNumbers.length != 0){    
    let simpleNumber = simpleNumbers.pop();
    let baseNumber = base;
    let curPower = 0;
    while (baseNumber % simpleNumber === 0){
      maxDevider.number = simpleNumber;
      curPower++;
      baseNumber /= simpleNumber;
    }
    if (baseNumber != base){
      maxDevider.power = curPower;
      break;
    }
  }
  
  //вычисление количества нулей
  let res = 0;

  while(number > 0){
    number = Math.floor(number / maxDevider.number);
    res += number;
  }

  return Math.floor(res / maxDevider.power);
}