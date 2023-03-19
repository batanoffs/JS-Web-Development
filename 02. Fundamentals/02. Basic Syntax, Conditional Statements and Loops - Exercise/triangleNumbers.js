function triangleNumbers (n) {

let line = ``;

for (let i = 1; i <= n; i++) {      
    
    for (let k = 1; k<=i; k++) {
        line +=`${i} `;
        
    }
    console.log(line);
    line = ``;
}


}

triangleNumbers(6);