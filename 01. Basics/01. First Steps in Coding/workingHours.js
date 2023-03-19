function workingHours(input){
    let timehour = Number(input[0]);
    let day = input[1];

    if (timehour >= 10 && timehour <=18) {

        switch(day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                console.log("open");
                break;
            case "Saturday":
            case "Sunday":
                console.log("closed");
                break;
        }
    } else {
        console.log("closed");
    }

}

workingHours(["11","Monday"])
workingHours(["19","Friday"])
workingHours(["11","Sunday"])
