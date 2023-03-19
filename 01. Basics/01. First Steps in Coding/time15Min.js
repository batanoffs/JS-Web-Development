function time15Min (input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let finalMin = 0;
    minutes += 15;

    if (minutes >= 60) {
        hours = hours + Math.floor(minutes/60);
        minutes = minutes - 60;
        if (hours === 24) {
            hours = 0 
        } else if(hours > 24) {
            hours = hours - 24;
        }
    }

    
    if (minutes >= 0 && minutes < 10) {
        finalMin = "0" + minutes;
    } else {
        finalMin = minutes;
    }

    console.log(hours + ":" + finalMin);
}

time15Min(["1",  "46"])
time15Min(["0", "01"])
time15Min(["23", "59"])
time15Min(["11", "08"])
time15Min(["12", "49"])

// Да се напише функция, която получава час и минути от 24 - часово денонощие и изчислява колко ще е часът след 15 минути.
// Резултатът да се отпечата във формат часове: минути.Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59.
// Часовете се изписват с една или две цифри.Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. 