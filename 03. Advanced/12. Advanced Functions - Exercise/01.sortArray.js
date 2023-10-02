function sortArray(array, argument) {

    //constants
    const ASCENDING_ORDER = `asc`;
    const DESCENDING_ORDER = `desc`;
    
    return argument === ASCENDING_ORDER
    ? ascending()
    : argument === DESCENDING_ORDER
    ? descending()
    : console.log(`asd`);
    
    function ascending () {
        return array.sort((a, b) => a - b);
    }
    function descending () {
        return array.sort((a, b) => b - a);
    }
}

sortArray([14, 7, 17, 6, 8], "asc");
sortArray([14, 7, 17, 6, 8], 'desc');
