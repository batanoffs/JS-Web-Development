function cleverLily(input) {
  let lillyAge = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let pricePerToy = Number(input[2]);
  let toyCount = 0;
  let brotherMoneyTaken = 1;
  let birthdayMoneyCounter = 0;
  let birthdayMoneyTotal = 0;
  
  if ( 1 > lillyAge && lillyAge > 77) {
    return;
  }

  for (let i = 1; i <= lillyAge; i++) {
    if (i === 2) {
      birthdayMoneyCounter = 10;
      birthdayMoneyTotal += birthdayMoneyCounter;
    } else if (i % 2 === 0) {
      birthdayMoneyCounter += 10;
      birthdayMoneyTotal += birthdayMoneyCounter;
      brotherMoneyTaken++;
    } else {
      toyCount++;
    }
  }

  let moneyFromToys = toyCount * pricePerToy;
  let totalMoney = moneyFromToys + birthdayMoneyTotal - brotherMoneyTaken;
  let moneyLeft = totalMoney - washingMachinePrice;
  let insufficientMoney = washingMachinePrice - totalMoney;

  if (totalMoney >= washingMachinePrice) {
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    console.log(`No! ${insufficientMoney.toFixed(2)}`);
  }
}

cleverLily(["21", "1570.98", "3"]);

// • Възрастта на Лили - цяло число в интервала [1...77]
// • Цената на пералнята - число в интервала [1.00...10 000.00]
// • Единична цена на играчка - цяло число в интервала [0...40]