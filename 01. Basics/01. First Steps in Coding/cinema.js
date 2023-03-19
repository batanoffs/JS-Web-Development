function cinema (input) {

    let ticket = input [0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let maxIncome = 0;

// · Premiere – премиерна прожекция, на цена 12.00 лева.
// · Normal – стандартна прожекция, на цена 7.50 лева.
// · Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.


    if (ticket === "Premiere") {
        ticket = 12;
        maxIncome = rows * colums * ticket;
        console.log(maxIncome.toFixed(2) + " leva");  

    } else if (ticket === "Normal") {

        ticket = 7.5;
        maxIncome = rows * colums * ticket;
        console.log(maxIncome.toFixed(2) + " leva");
    
    } else if (ticket === "Discount") {

        ticket = 5;
        maxIncome = rows * colums * ticket;
        console.log(maxIncome.toFixed(2) + " leva");

    }  



}

cinema(["Discount", "12", "30"]) 
