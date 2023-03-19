// Вход

// Входът се чете от конзолата и съдържа точно 4 реда:
// 1. Необходимо количество найлон(в кв.м.) - цяло число в интервала[1... 100]
// 2. Необходимо количество боя(в литри) - цяло число в интервала[1…100]
// 3. Количество разредител(в литри) - цяло число в интервала[1…30]
// 4. Часовете, за които майсторите ще свършат работата - цяло число в интервала[1…9]

// Изход

// Да се отпечата на конзолата един ред:
// · "{сумата на всички разходи}" 

function repaint (input) {
    let naylonQ = Number(input[0]);
    let paintQ = Number(input[1]);
    let thinnerQ = Number(input[2]);
    let workTime = Number(input[3]);

    let additionalPaintQ = 0.10 * paintQ;
    let totalPaintQ = paintQ + additionalPaintQ;

    let totalNaylonQ = naylonQ + 2;

    let naylonPrice = totalNaylonQ * 1.5;
    let paintPrice = totalPaintQ * 14.5;
    let thinnerPrice = thinnerQ * 5;

    let totalMaterialPrice = naylonPrice + paintPrice + thinnerPrice + 0.4;

    let workPricePerHour = 0.3 * totalMaterialPrice;
    let totalWorkPrice = workTime * workPricePerHour;

    let totalSum = totalMaterialPrice + totalWorkPrice;

    console.log(totalSum);
}

repaint (["10", "11", "4", "8"]);