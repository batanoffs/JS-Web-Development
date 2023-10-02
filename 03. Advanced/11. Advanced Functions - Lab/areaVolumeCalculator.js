function areaVol(areaFunc, volFunc, shapesJson) {

    const result = JSON.parse(shapesJson).map((shape) => {
        return {
            area: areaFunc.call(shape),
            volume: volFunc.call(shape)
        };
    });

    return result; 
}

function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}
const a = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

const b = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`;

areaVol(area, vol, a);
areaVol(area, vol, b);
