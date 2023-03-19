function toyShop(input) {

    let remainingMoney = 0;
    let moneyNeeded = 0;
    let tottalPrize = 0;

    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingToyCount = Number(input[2]);
    let bearsToyCount = Number(input[3]);
    let minionsToyCount = Number(input[4]);
    let trucksToyCount = Number(input[5]);
    let tottalToyCount = puzzleCount + talkingToyCount + bearsToyCount + minionsToyCount + trucksToyCount;

    tottalPrize = puzzleCount*2.60 + talkingToyCount*3 + bearsToyCount*4.1 + minionsToyCount*8.2 + trucksToyCount*2;

    if (tottalToyCount >= 50) {
        tottalPrize = tottalPrize - tottalPrize * 0.25;
    }

    let moneyleft = tottalPrize - tottalPrize * 0.1;

    remainingMoney = moneyleft - tripPrice;
    moneyNeeded = tripPrice - moneyleft;

    
    if (moneyleft >= tripPrice) {
        console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }    
}

toyShop(["40.8","20","25","30","50","10"])
console.log (`-------------------------------------`)
toyShop(["320", "8", "2", "5", "5", "1"])



// Магазин за детски играчки

// Петя има магазин за детски играчки.Тя получава голяма поръчка, която трябва да изпълни.
// С парите, които ще спечели иска да отиде на екскурзия.

// Цени на играчките:
// · Пъзел - 2.60 лв.
// · Говореща кукла - 3 лв.
// · Плюшено мече - 4.10 лв.
// · Миньон - 8.20 лв.
// · Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25 % от общата цена.
// От спечелените пари Петя трябва да даде 10 % за наема на магазина.Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.

// Вход

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