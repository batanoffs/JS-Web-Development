function shopping(input) {
    let peshoBudget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ddr = Number(input[3]);

    let videoCardPrice = videoCards * 250;
    let processorsPrice = processors* (videoCardPrice*0.35);
    let ddrPrice = ddr*(videoCardPrice * 0.10);
      
    let allExpenses = videoCardPrice + processorsPrice + ddrPrice;

    let moneyLeft = 0;
    let moneyNeeded = 0;

    if (videoCards > processors) {
       allExpenses = allExpenses -allExpenses*0.15;
    }

    if (peshoBudget >=allExpenses) {
        moneyLeft = (peshoBudget -allExpenses).toFixed(2);
        console.log(`You have ${moneyLeft} leva left!`)
        } else {
        moneyNeeded = (allExpenses - peshoBudget).toFixed(2);    
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`)
        }
}

shopping(["900",    "2",    "1",    "3"]);
shopping(["920.45",    "3",    "1",    "1"]);

// Пазаруване

// Петър иска да купи N видеокарти, M процесора и P на брой рам памет.
// Ако броя на видеокартите е по - голям от този на процесорите получава 15 % отстъпка от крайната сметка.
// Важат следните цени:

// · Видеокарта – 250 лв./ бр.
// · Процесор – 35 % от цената на закупените видеокарти / бр.
// · Рам памет – 10 % от цената на закупените видеокарти / бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.

// Вход
// Входът се състои от четири реда:
// 1. Бюджетът на Петър - реално число в интервала[0.0…100000.0]
// 2. Броят видеокарти - цяло число в интервала[0…100]
// 3. Броят процесори - цяло число в интервала[0…100]
// 4. Броят рам памет - цяло число в интервала[0…100]

// Изход
// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
// · Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// · Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
// Резултатът да се форматира до втория знак след десетичната запетая. 