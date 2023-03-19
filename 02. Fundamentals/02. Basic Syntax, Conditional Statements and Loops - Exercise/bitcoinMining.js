function bitcoinMining (input) {

    let index = 0;
    let bitcoin = 11949.16;
    let totalBitcoins = 0;
    let totalGold = 0;
    let firstDayPurchase = 0;
    let currentDayGoldMined = input[index];
   

    while (currentDayGoldMined !== undefined) {
        
        let goldOfDay = 0;

        switch(index) {
            case 0: case 1: case 3: case 4: case 6: case 7:
                goldOfDay = (currentDayGoldMined*67.51);
                break;
            case 2: case 5: 
                goldOfDay = (currentDayGoldMined*67.51)*0.7;
                break;            
        }

        totalGold += goldOfDay;
        
        if (totalGold >= bitcoin) {
            if (firstDayPurchase === 0) {
            firstDayPurchase = index + 1;    
            }        
        }
        index ++;
        currentDayGoldMined = input[index];
    }
     
    let moneyleft = totalGold;
    totalBitcoins = Math.floor(totalGold/bitcoin);   
    
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalGold >= bitcoin) {                   
        console.log(`Day of the first purchased bitcoin: ${firstDayPurchase}`);
        moneyleft = totalGold - totalBitcoins*bitcoin;       
    }     
    console.log(`Left money: ${moneyleft.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);

//calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine