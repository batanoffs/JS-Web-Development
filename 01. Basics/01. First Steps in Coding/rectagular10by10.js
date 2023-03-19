function singleLine() {
    let line = "";

    for (let i = 0; i <= 10; i++) {
        line = line + "*"

    }
    return line + "\n";

}


function rectangle10() {

    let rect = "";

    for (let a=1; a<=10; a++) {
        rect += singleLine();
                              
    }

    return rect;
}

console.log(rectangle10());