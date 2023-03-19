function division (num) {

    if (num%2===0) {

        if (num%10===0) {
            console.log(`The number is divisible by 10`);
        } else if (num%3===0) {

            if (num%6===0) {
                console.log(`The number is divisible by 6`);
            } else {
                console.log(`The number is divisible by 3`);
            } 
                
        } else {
            console.log(`The number is divisible by 2`);
        }
        
    } else if (num%3===0) {
        if (num%6===0) {
            console.log(`The number is divisible by 6`);
        } else {
        console.log(`The number is divisible by 3`);
        }
    } else if (num%7===0) {
        console.log(`The number is divisible by 7`);    
    } else {
        console.log("Not divisible");
    }  
}

division(153);


// 2, 3, 6, 7, 10