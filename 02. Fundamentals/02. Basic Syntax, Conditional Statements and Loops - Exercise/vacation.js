function vacation(people, type, dayOfWeek) {

let price = 0;

if (dayOfWeek === "Friday") {
    switch(type) {
        case "Students":
            price = people * 8.45;
            if (people >= 30) {
                price = price * 0.85;
            }
            break;
        case "Business":
            price = people * 10.90;
            if (people >= 100) {
                price = price - 10 * 10.90;
            }
            break;
        case "Regular":
            price = people * 15;
            if (people >= 10 && people <= 20) {
                price = price * 0.95;
            }
            break;
    }

} else if (dayOfWeek === "Saturday") {
    switch(type) {
        case "Students":
            price = people * 9.80;
            if (people >= 30) {
                price = price * 0.85;
            }
            break;
        case "Business":
            price = people * 15.60;
            if (people >= 100) {
                price = price - 10 * 10.90;
            }
            break;
        case "Regular":
            price = people * 20;
            if (people >= 10 && people <= 20) {
                price = price * 0.95;
            }
            break;
    }

} else if (dayOfWeek === "Sunday") {
    switch(type) {
        case "Students":
            price = people * 10.46;
            if (people >= 30) {
                price = price * 0.85;
            }
            break;
        case "Business":
            price = people * 16;
            if (people >= 100) {
                price = price - 10 * 10.90;
            }
            break;
        case "Regular":
            price = people * 22.50;
            if (people >= 10 && people <= 20) {
                price = price * 0.95;
            }
            break;
    }

}


console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30,"Students","Sunday");
vacation(40,"Regular","Saturday");


/* You are given a group of people, the type of the group, and the day of the week they are going to stay

Total price: {price}`.The price should be formatted to the second decimal point.
There are also discounts based on some conditions:
    • Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
    • Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
    • Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
Note: You should reduce the prices in that EXACT order. */