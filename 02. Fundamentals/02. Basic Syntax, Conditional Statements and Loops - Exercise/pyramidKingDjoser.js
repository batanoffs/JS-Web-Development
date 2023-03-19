function pyramidKingDjoser(base,increment) {

    let stone = 0;
    let marble = 0;
    let gold = 0;
    let lapisLazuli = 0;
    let allStones = 0;
    let allMarbles = 0;
    let allLapisLazuli = 0;
    let height = 0;
    let i = base - 8;
    let flag = false;
 
        for (let a = base; a >= 1; a -= 2) {
            i = base - 8;
            flag = false;

            while (i >= 3) {                
                if (a === i) {
                    flag = true;
                    break;
                } else {
                    i -= 8;
                }
            }
            
            if (flag === true) {
                stone = (a-2) * (a-2) * increment;
                lapisLazuli = (2*(a+a) - 4) * increment;  
                allStones += stone; 
                allLapisLazuli += lapisLazuli;
            } else if (a <= 2) {
                gold = a * a;
            } else {
                stone = (a-2) * (a-2) * increment;
                marble = (2*(a+a) - 4) * increment;
                allStones += stone; 
                allMarbles += marble;
            }                 
            height ++; 
        }   
    console.log(`Stone required: ${Math.round(allStones)}`);
    console.log(`Marble required: ${Math.round(allMarbles)}`);
    console.log(`Lapis Lazuli required: ${Math.round(allLapisLazuli)}`);
    console.log(`Gold required: ${Math.round(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height*increment)}`);
}

pyramidKingDjoser(23, 0.5);