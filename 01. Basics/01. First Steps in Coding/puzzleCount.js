// Петя има магазин за детски играчки.Тя получава голяма поръчка, която трябва да изпълни.
// С парите, които ще спечели иска да отиде на екскурзия.
// Цени на играчките:
// · Пъзел - 2.60 лв.
// · Говореща кукла - 3 лв.
// · Плюшено мече - 4.10 лв.
// · Миньон - 8.20 лв.
// · Камионче - 2 лв.

// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25 % от общата цена.
// От спечелените пари Петя трябва да даде 10 % за наема на магазина.
// Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.

//     Вход
// От конзолата се четат 6 реда:
// 1. Цена на екскурзията - реално число в интервала[1.00 … 10000.00]
// 2. Брой пъзели - цяло число в интервала[0… 1000]
// 3. Брой говорещи кукли - цяло число в интервала[0 … 1000]
// 4. Брой плюшени мечета - цяло число в интервала[0 … 1000]
// 5. Брой миньони - цяло число в интервала[0 … 1000]
// 6. Брой камиончета - цяло число в интервала[0 … 1000]

// Изход
// На конзолата се отпечатва:
// · Ако парите са достатъчни се отпечатва:
// o "Yes! {оставащите пари} lv left."
// · Ако парите НЕ са достатъчни се отпечатва:
// o "Not enough money! {недостигащите пари} lv needed."
// Резултатът трябва да се форматира до втория знак след десетичната запетая.

function puzzleCount (input) {

    let holidayPrice = Number (input[0]);
    let puzzleCount = Number (input[1]);
    let dollsCount = Number (input[2]);
    let bearsCount = Number (input[3]);
    let minionsCount = Number (input[4]);
    let trucksCount = Number (input[5]);

    let toysPrice = puzzleCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;
    let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;
    
    if (toysCount >= 50) {
        toysPrice = 0.75 * toysPrice;
    }
    let moneyWon = toysPrice;
    moneyWon = 0.9 * moneyWon;

    if (moneyWon >= holidayPrice) {
        let moneyLeft = moneyWon - holidayPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = holidayPrice - moneyWon;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}

puzzleCount(["320", "8", "2", "5", "5", "1"]);