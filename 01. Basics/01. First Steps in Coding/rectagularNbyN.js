// Правоъгълник от N x N звездички
// Напишете програма, която чете цяло положително число n, въведено от потребителя, 
// и печата на конзолата правоъгълник от n * n звездички.

// вход	изход		
// 2        **
//          **

// вход	изход
//  3       ***
//          ***


function singleLine(lenght) {
    let side = Number(lenght);
    let line = "";

    for (let i = 1; i <= side; i++) {
        line = line + "* "

    }
    return line + "\n";

}

function buildRectangle(lenght) {

    let lineNumber = Number(lenght);
    let rectangle = "";

    for (let i = 1; i <= lineNumber; i++) {
        rectangle += singleLine(lenght);

    }

    console.log(rectangle);
}

buildRectangle("6");
