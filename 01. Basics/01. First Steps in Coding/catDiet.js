// Процент на мазнините - цяло число в интервала [0…100]
// Процент на протеините - цяло число в интервала [0…100]
// Процент на въглехидратите - цяло число в интервала [0…100]
// Общ брой калории - цяло число в интервала [1000…15000]
// Процент на съдържанието на вода - цяло число в интервала [0…100]


// •	1 грам мазнини = 9 калории
// •	1 грам протеини = 4 калории
// •	1 грам въглехидрати = 4 калории

function catDiet(input) {
    let mazniniPercent = Number(input[0]);
    let proteinPercent = Number(input[1]);
    let vaglehidratiPercent = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercent = Number(input[4]);


    let totalMaznini = (totalCalories*(mazniniPercent/100))/9;
    let totalProtein = (totalCalories*(proteinPercent/100))/4;
    let totalVaglehidrati = (totalCalories*(vaglehidratiPercent/100))/4;
    let totalWater = totalCalories*(waterPercent/100);

    let foodWeight = totalMaznini + totalProtein + totalVaglehidrati;
    let caloriesForGram = totalCalories / foodWeight;
    let calories = caloriesForGram * ((100-waterPercent)/100);  

    
console.log(calories.toFixed(4));
    
}

catDiet(["60","25","15","2500","60"])

catDiet(["40","40","20","3000","40"])

catDiet(["20","60","20","1800","50"])



