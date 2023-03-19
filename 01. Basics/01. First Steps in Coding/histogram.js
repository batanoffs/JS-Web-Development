function histogram(input) {
    let n = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;



    for (let i = 1; i<=n; i++) {
        let num = Number(input[i]);
            if (num>= 1 && num<=1000) {
                if (num < 200) {
                    p1Count++;            
                } else if (num>=200 && num <=399) {
                    p2Count++;
                } else if (num>=400 && num <=599) {
                    p3Count++;
                } else if (num>=600 && num <=799) {
                    p4Count++;
                } else {
                    p5Count++;
                }
            }       
        }

    let p1 = (p1Count/n*100).toFixed(2) + "%";
    let p2 = (p2Count/n*100).toFixed(2) + "%";
    let p3 = (p3Count/n*100).toFixed(2) + "%";
    let p4 = (p4Count/n*100).toFixed(2) + "%";
    let p5 = (p5Count/n*100).toFixed(2) + "%";

    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);
    console.log(p5);


}
// histogram(["3","1","2","999"])
// histogram(["7","800","801","250","199","399","599","799"])
//histogram(["9","367","99", "200", "799","999","333","555","111","9"])
histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"])

