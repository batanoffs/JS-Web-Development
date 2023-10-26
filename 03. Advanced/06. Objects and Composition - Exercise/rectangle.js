function rectangle (width, height, color) {
    let colorFix = color.slice(0,1).toUpperCase() + color.slice(1);
    
    return {
        width: width,
        height: height,
        color: colorFix,

        calcArea() {
            return width * height;
        }
    }
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());