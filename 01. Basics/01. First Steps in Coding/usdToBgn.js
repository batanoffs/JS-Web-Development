
// 1 USD = 1.79549 BGN. 

function usdToBgn(input) {
    
    let b = Number(input[0]);
    let a = b * 1.79549;

    console.log(a);
}

usdToBgn(["43","24"])