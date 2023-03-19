// javascript

function numCheckCodix(N) {

    for (let num = 10; num < N; num++) {
        if (N < 39) {
            if (num % 5 == 0)
                console.log(num + " ");
        } else {
            console.log("числото е по-голямо от 39");
        }
    }
}

let N = 30;

numCheckCodix(N);
