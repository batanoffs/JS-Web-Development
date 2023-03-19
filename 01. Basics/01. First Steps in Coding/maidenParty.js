// Цени на различните артикули:
// •	Любовно послание - 0.60 лв.
// •	Восъчна роза - 7.20 лв.
// •	Ключодържател - 3.60 лв.
// •	Карикатура - 18.20 лв.
// •	Късмет изненада - 22 лв.

// От конзолата се четат 6 реда:
// 1.	Цена на моминското парти - реално число в интервала [1.00 … 10000.00]
// 2.	Брой любовни послания - цяло число в интервала [0… 1000]
// 3.	Брой восъчни рози - цяло число в интервала [0 … 1000]
// 4.	Брой ключодържатели - цяло число в интервала [0 … 1000]
// 5.	Брой карикатури - цяло число в интервала [0 … 1000]
// 6.	Брой късмети изненада - цяло число в интервала [0 … 1000]

// Ако поръчаните артикули са 25 или повече магазинът прави отстъпка 35% от общата цена

// трябва да предвиди и 10% разход за хостинг


function maidenParty(input) {
    let womenPartyPrice = Number(input[0]);
    let loveLettersCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let keyHoldersCount = Number(input[3]);
    let funnyDrawingsCount = Number(input[4]);
    let luckyCardsCount = Number(input[5]);

    let totalCount = loveLettersCount + rosesCount + keyHoldersCount + funnyDrawingsCount + luckyCardsCount;
    let totalPrice = loveLettersCount*0.6 + rosesCount*7.2 + keyHoldersCount*3.6 + funnyDrawingsCount*18.20 + luckyCardsCount*22;
    
    if (totalCount > 25) {
        totalPrice *=0.65;
    }
    let hostingPrice = totalPrice *0.10;
    totalPrice = totalPrice - hostingPrice;

    if(totalPrice >= womenPartyPrice) {
        let moneyLeft = totalPrice - womenPartyPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let insufficientFunds = womenPartyPrice - totalPrice;
        console.log(`Not enough money! ${insufficientFunds.toFixed(2)} lv needed.`);
    }

    
}

maidenParty(["40.8","20","25","30","50","10"])
maidenParty(["320","8","2","5","5","1"])
