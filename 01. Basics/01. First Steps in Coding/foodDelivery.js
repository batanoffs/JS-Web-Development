// Ресторант отваря врати и предлага няколко менюта на преференциални цени:
// • Пилешко меню – 10.35 лв.
// • Меню с риба – 12.40 лв.
// • Вегетарианско меню – 8.15 лв.
// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
// Групата ще си поръча и десерт, чиято цена е равна на 20 % от общата сметка(без доставката).
// Цената на доставка е 2.50 лв и се начислява най - накрая.

// Вход
// От конзолата се четат 3 реда:
// · Брой пилешки менюта – цяло число в интервала[0 … 99]
// · Брой менюта с риба – цяло число в интервала[0 … 99]
// · Брой вегетариански менюта – цяло число в интервала[0 … 99]

// Изход
// Да се отпечата на конзолата един ред: "{цена на поръчката}" 


function foodDelivery (input) {

    let chickenMenuPrice = Number(input[0]);
    let fishMenuPrice = Number(input[1]);
    let vegieMenuPrice = Number(input[2]);

    chickenMenuPrice = chickenMenuPrice *10.35;
    fishMenuPrice = fishMenuPrice * 12.40;
    vegieMenuPrice = vegieMenuPrice * 8.15;

    let totalMenuPrice = chickenMenuPrice + fishMenuPrice + vegieMenuPrice;
    let decertPrice = totalMenuPrice * 0.2;

    let totalPrice = totalMenuPrice + decertPrice + 2.5;

    console.log(totalPrice);

}

foodDelivery(["2","4","3"]);