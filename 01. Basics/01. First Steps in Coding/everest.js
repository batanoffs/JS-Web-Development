function everest(input) {
    let index = 0;
    let rest = input[index];
    index ++;
    let dayCount = 1;
    let meterCount = 5364;
    
    while (meterCount < 8848) {
        if (rest === "Yes") {
            dayCount ++;
            if (dayCount === 6) {
                break;
            }
            if (index >= 2) {
                index++;
            }
            meterCount += Number(input[index]);
            index ++;
            rest = input[index];
        } else if (rest === "No") {
            if (index >= 2) {
                index++;
            }
            meterCount += Number(input[index]);
            index ++;
            rest = input[index];
        } else if (rest === "END") {
            break;
        }     
    }

    if (meterCount >= 8848) {
        console.log(`Goal reached for ${dayCount} days!`);
    } else {
    console.log("Failed!");
    console.log(meterCount);
    }
    
}

everest(["Yes","535","Yes","849","Yes","499","Yes","400","Yes","500"])

everest(["Yes","1254","Yes","1402","No","250","Yes","635"])
everest(["Yes","1000","Yes","945","No","1200","END"])
everest(["Yes","700","END"])



// до каква height е достигнал и за колко days е изкачил върха

// базов лагер е на 5 364 м
// самият връх е на 8 848 м

// Програмата приключва при:
// - получаване на командата "END"
// - достигане на върха 8 848 м
// - превишаване на разрешените 5 дни за изкачване totalDaysGiven



