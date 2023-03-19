function sumAndProduct(input) {
    let n = Number(input[0]);
    let flag = false;

    for (let a = 1; a < 9; a ++) {
        for (let b = 9; b > a; b --) {
            for (let c = 0; c < 9; c ++) {
                for (let d = 9; d > c; d --) {
                    let sum = a + b + c + d;
                    let pow = a * b * c * d;

                    if ((sum === pow) && (n % 10 === 5)) {
                        console.log(a * 1000 + b * 100 + c * 10 + d);
                        flag = true;
                        break;                   
                    } else if (pow/sum === 3 && n % 3 === 0) {
                        console.log(d * 1000 + c * 100 + b * 10 + a); 
                        flag = true;
                        break;                         
                    }                    
                }
            if (flag) {
                break;
               }   
            }
        if (flag) {
            break;
          }
        }
    if (flag) {
        break;
       }
    }
    
    if (!flag) {
        console.log("Nothing found");
    }
}

sumAndProduct(["123"])
sumAndProduct(["145"])
sumAndProduct(["214"])


    // •	a се мени от 1 до 9
    // •	b се мени от 9 до а
    // •	c се мени от 0 до 9
    // •	d се мени от 9 до c
    

    // Ако сумата (a + b + c + d) е равна на произведението (a * b * c * d) 
    // и едновременно с това n завършва на 5, трябва да се принтира числото abcd.