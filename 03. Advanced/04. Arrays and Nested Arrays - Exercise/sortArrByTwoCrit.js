function sortArrayByTwoCrit(data) {
    return data.sort((a, b) => {
            if (a.length !== b.length) {
                return a.length - b.length;
            }
            return a.localeCompare(b);
        }).join(`\n`);
}

console.log(sortArrayByTwoCrit(["alpha", "beta", "gamma"]));
console.log(`----------------------`);
console.log(sortArrayByTwoCrit(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']));
console.log(`----------------------`);
console.log(sortArrayByTwoCrit(['test', 
'Deny', 
'omen', 
'Default']));
