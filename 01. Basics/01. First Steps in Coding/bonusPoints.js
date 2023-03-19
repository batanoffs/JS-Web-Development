function bonusPoints (input) {

    let num = Number(input[0]);
    let bonusPoints = 0.0;
    let additionalPoints = 0;

    if (num <= 100) {
        bonusPoints = 5;   
    } else if (num > 100 && num <= 1000) {
        bonusPoints = num * 0.2;
    } else if (num > 1000) {
        bonusPoints = num * 0.1;
    } 

    if (num % 2 === 0) {
        additionalPoints += 1;
    } else if (num % 5 === 0) {
        additionalPoints += 2;
    }

    bonusPoints += additionalPoints;
    let allPoints = num + bonusPoints;

    console.log(bonusPoints);
    console.log(allPoints);
}
bonusPoints(["175"])  

// Дадено е цяло число – начален брой точки.Върху него се начисляват бонус точки по правилата, описани по - долу.
// Да се напише функция, която пресмята бонус точките, които получава числото и общия брой точки(числото + бонуса).

// · Ако числото е до 100 включително, бонус точките са 5.
// · Ако числото е по - голямо от 100, бонус точките са 20 % от числото.
// · Ако числото е по - голямо от 1000, бонус точките са 10 % от числото.
// · Допълнителни бонус точки(начисляват се отделно от предходните):

// o За четно число à + 1 т.
// o За число, което завършва на 5 à + 2 т. 