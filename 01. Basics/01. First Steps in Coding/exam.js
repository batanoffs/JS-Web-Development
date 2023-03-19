function exam(input) {
    let studentsCount = Number(input[0]);

    let between2And3 = 0;
    let between3And4 = 0;
    let between4And5 = 0;
    let above5 = 0;
    let scoreSum = 0;
    

    for (let i=1; i<=studentsCount; i++) {
        let score = Number(input[i]);
        scoreSum = scoreSum + Number(input[i]);


        if (score >= 2.00 && score <=2.99) {
            between2And3++;
        } else if (score>=3 && score <=3.99) {
            between3And4++;

        } else if (score>=4 && score <=4.99) {
            between4And5++;

        } else if (score>=5) {
            above5++;
        }
    }
    let averageExamScore = scoreSum/studentsCount;
    let between2And3Percent = between2And3/studentsCount*100;
    let between3And4Percent = between3And4/studentsCount*100;
    let between4And5Percent = between4And5/studentsCount*100;
    let above5Percent = above5/studentsCount*100;

console.log(`Top students: ${above5Percent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${between4And5Percent.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${between3And4Percent.toFixed(2)}%`);
console.log(`Fail: ${between2And3Percent.toFixed(2)}%`);

console.log(`Average: ${averageExamScore.toFixed(2)}`);
}
    
exam(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"])
exam(["6","2","3","4","5","6","2.2"])