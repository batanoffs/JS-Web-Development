function sumSeconds(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    sum = first + second + third;
    let min = Math.floor(sum/60);
    let sec = sum % 60; 

    if (min == 0) {
        min = "0";
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    console.log(min + ":" + sec);

}


sumSeconds(["14", "12", "10"])


// Трима спортни състезатели финишират за някакъв брой секунди(между 1 и 50).
// Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време
// във формат "минути:секунди".Секундите да се изведат с водеща нула(2 -> "02", 7 -> "07", 35 -> "35"). 