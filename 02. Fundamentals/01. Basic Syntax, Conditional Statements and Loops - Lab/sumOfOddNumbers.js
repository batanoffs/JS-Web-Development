function sumOfOddNumbers (n) {

    let totalSum = 0;
    let i = 1;
        
    while ( n !== 0) {
        
        if ( i % 2 !== 0 ) {
        console.log(i);
        totalSum += i;
        n--;
        }
        i++;
        
        if (n === 0) {
            break;
        }
                
    }
    console.log(`Sum: ${totalSum}`);
}

sumOfOddNumbers(1);