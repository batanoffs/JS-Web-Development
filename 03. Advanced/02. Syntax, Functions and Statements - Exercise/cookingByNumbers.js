function cookingByNumbers(...data) {
    let index = 0;
    let number = Number(data[0]);
    index ++;

    while (data[index] !== undefined) {
        switch (data[index]) {
            case `chop`: number /= 2;  break;
            case `dice`: number = Math.sqrt(number);  break;
            case `spice`: number += 1;  break;
            case `bake`: number *= 3;  break;
            case `fillet`: number -= 0.2*number;  break;
        
            default:
                break;
        }
        index++;
        console.log(number);
    }
}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');