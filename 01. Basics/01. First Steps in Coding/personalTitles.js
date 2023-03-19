// •	"Mr." – мъж (пол 'm') на 16 или повече години
// •	"Master" – момче (пол 'm') под 16 години
// •	"Ms." – жена (пол 'f') на 16 или повече години
// •	"Miss" – момиче (пол 'f') под 16 години

function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if (age >= 16) {
        switch (gender) {
            case "f":
                console.log("Ms.");
                break;
            case "m":
                console.log("Mr.");
                break;
        }
    } else {
        switch (gender) {
            case "f":
                console.log("Miss");
                break;
            case "m":
                console.log("Master");
                break;
        }
    }
}

personalTitles(["12","f"])

personalTitles(["17","m"])

personalTitles(["25","f"])

personalTitles(["13.5","m"])
