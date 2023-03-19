function theatrePromotions(day,age) {
    let ticket = 0;

    if (0 <= age && age <= 18) {
        switch(day) {
            case 'Weekday':
                ticket = 12;
                console.log(ticket + `$`);
                break;
            case 'Weekend':
                ticket = 15;
                console.log(ticket + `$`);
                break;
            case 'Holiday':
                ticket = 5;
                console.log(ticket + `$`);
                break;            
        }
    } else if (18 < age && age <= 68) {
        switch(day) {
            case 'Weekday':
                ticket = 18;
                console.log(ticket + `$`);
                break;
            case 'Weekend':
                ticket = 20;
                console.log(ticket + `$`);
                break;
            case 'Holiday':
                ticket = 12;
                console.log(ticket + `$`);
                break;  
        }
    } else if (68 < age && age <= 122) {
        switch(day) {
            case 'Weekday':
                ticket = 12;
                console.log(ticket + `$`);
                break;
            case 'Weekend':
                ticket = 15;
                console.log(ticket + `$`);
                break;
            case 'Holiday':
                ticket = 10;
                console.log(ticket + `$`);
                break;  
        }
    } else {
        console.log("Error!");
    }
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday',-12);
theatrePromotions('Holiday', 15);