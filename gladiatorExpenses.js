function gladiatorExpenses (lostFightsCount,helmetPrice,swordPrice, shieldPrice, armorPrice) {
  let totalExpenses = 0;
  let helmetCounter = 0;
  let armorCounter = 0;
  let swordCounter = 0;
  let shieldCounter = 0;

  for (let i = 1; i<= lostFightsCount; i ++) {
    if (i%3 === 0 && i%2 === 0 && i > 1) {
        helmetCounter++;
        swordCounter++;
        if (shieldCounter%2 === 0 && shieldCounter > 1){
          shieldCounter++;
          armorCounter++;
        } else {
          shieldCounter++;
        }
    } else if (i%3 === 0 && i > 1) {
        swordCounter++;
    } else if (i%2 === 0) {
        helmetCounter++;
    }
  }
  totalExpenses = helmetCounter*helmetPrice + armorCounter*armorPrice + swordCounter*swordPrice + shieldCounter*shieldPrice;
  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);  
  console.log(helmetCounter);
  console.log(swordCounter);
  console.log(armorCounter);
  console.log(shieldCounter);
}
gladiatorExpenses(23,
  12.50,
  21.50,
  40,
  200);


// • The first parameter - lost fights count - is an integer in the range [0, 1000].
// • The second parameter - helmet price - is the floating-point number in the range [0, 1000]. 
// • The third parameter - sword price - is the floating-point number in the range [0, 1000]. 
// • The fourth parameter - shield price - is the floating-point number in the range [0, 1000]. 
// • The fifth parameter - armor price - is the floating-point number in the range [0, 1000]. 