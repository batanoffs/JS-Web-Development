function godrzilaKong (input) {

    let budget = Number(input[0])
    let statitsNumbers = Number(input[1])
    let clothingPricePerPerson = Number(input[2])
    let clothingPriceTotal = clothingPricePerPerson * statitsNumbers;
    let decorPrice = budget*0.1;

    if (statitsNumbers > 150) {
        clothingPriceTotal = clothingPriceTotal - clothingPriceTotal*0.10;
    }

    if ((clothingPriceTotal + decorPrice) > budget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${((clothingPriceTotal + decorPrice) - budget).toFixed(2)} leva more.`)
    } else {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - (clothingPriceTotal + decorPrice)).toFixed(2)} leva left.`)
        
    }

}

godrzilaKong(["20000",   "120","55.5"]) 
godrzilaKong(["15437.62","186","57.99"]) 
godrzilaKong(["9587.88", "222","55.68"])

// Годзила срещу Конг

// Снимките за дългоочаквания филм "Годзила срещу Конг" започват.
// Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, дали предвидените средства са достатъчни за снимането на филма.
// За снимките ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
// Известно е, че:

// · Декорът за филма е на стойност 10 % от бюджета.
// · При повече от 150 статиста, има отстъпка за облеклото на стойност 10 %.

//     Вход

// Функцията получава 3 аргумента:
// 1. Бюджет за филма – реално число в интервала[1.00 … 1000000.00]
// 2. Брой на статистите – цяло число в интервала[1 … 500]
// 3. Цена за облекло на един статист – реално число в интервала[1.00 … 1000.00]

//     Изход

// На конзолата трябва да се отпечатат два реда:
// · Ако парите за декора и дрехите са повече от бюджета:
// o "Not enough money!"
// o "Wingard needs {парите недостигащи за филма} leva more."
// · Ако парите за декора и дрехите са по малко или равни на бюджета:
// o "Action!"
// o "Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.