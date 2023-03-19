function santasHoliday(input) {
    let daysRent = Number(input[0]);
    let roomType = input[1];
    let review = input[2];

    let nightsCount = daysRent - 1;
    let roomTotalPrice = 0;
    if (nightsCount <10) {
        switch(roomType) {
            case "room for one person":
                roomTotalPrice = nightsCount*18;
                break;

            case "apartment":
                roomTotalPrice = (nightsCount*25)*0.7;
                break;
            case "president apartment":
                roomTotalPrice = (nightsCount*35)*0.9;
                break;
        }
    } else if (nightsCount>10 && nightsCount<15) {
        switch(roomType) {
            case "room for one person":
                roomTotalPrice = nightsCount*18;
                break;

            case "apartment":
                roomTotalPrice = (nightsCount*25)*0.65;
                break;
            case "president apartment":
                roomTotalPrice = (nightsCount*35)*0.85;
                break;
        }
    } else {
        switch(roomType) {
            case "room for one person":
                roomTotalPrice = nightsCount*18;
                break;

            case "apartment":
                roomTotalPrice = (nightsCount*25)*0.5;
                break;
            case "president apartment":
                roomTotalPrice = (nightsCount*35)*0.80;
                break;
        }
    }

    if (review === "positive") {
        let finalPrice = roomTotalPrice + roomTotalPrice*0.25;
        console.log(finalPrice.toFixed(2));
    }   else if (review === "negative") {
        let finalPrice = roomTotalPrice - roomTotalPrice*0.1;
        console.log(finalPrice.toFixed(2));
    }
}

santasHoliday(["14","apartment","positive"])
santasHoliday(["30","president apartment","negative"])
santasHoliday(["12","room for one person","positive"])
santasHoliday(["2","apartment","positive"])



// цени за престой:
// "room for one person" – 18.00 лв за нощувка
// "apartment"           – 25.00 лв за нощувка 
// "president apartment" – 35.00 лв за нощувка

// оценката нза услугите на хотела - позитивна (positive) или негативна (negative). 
// Ако оценката му е позитивна, към цената с вече приспаднатото намаление добавя 25%. 
// Ако оценката му е негативна приспада от цената 10%.

// •	Първи ред – дни за престой – цяло число в интервала [0...365]
// •	Втори ред –  вид помещение –  "room for one person",  "apartment" или "president apartment"
// •	Трети ред –  оценка - "positive"  или "negative
