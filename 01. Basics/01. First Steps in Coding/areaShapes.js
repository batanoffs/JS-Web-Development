function areaShapes(input) {

    let type = input[0];
    let result = 0;
    if (type === "square") {
        let side = Number(input[1]);
        result = side*side;
        
    } else if (type === "rectangle") {
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        result = side1 * side2;

    } else if(type === "circle") {
        let radius = Number(input[1]);
        result = Math.PI * Math.pow(radius, 2);

    } else {
        let side = Number(input[1]);
        let height = Number(input[2]);
        result = side * height / 2;
    }


    console.log(result.toFixed(3))
} 

areaShapes(["triangle", "4.5", "20"]) 
// Да се напише функция, която получава като вида и размерите на геометрична фигура и пресмята лицето й.
// Фигурите са четири вида: квадрат(square), правоъгълник(rectangle), кръг(circle) и триъгълник(triangle).
// На първия ред на входа се чете вида на фигурата
// (текст със следните възможности: square, rectangle, circle или triangle).

// · Ако фигурата е квадрат(square): на следващия ред се чете едно дробно число - дължина на страната му
// · Ако фигурата е правоъгълник(rectangle): на следващите два реда четат две дробни числа - дължините
//  на страните му
// · Ако фигурата е кръг(circle): на следващия ред чете едно дробно число - радиусът на кръга
// · Ако фигурата е триъгълник(triangle): на следващите два реда четат две дробни числа - дължината
//  на страната му и дължината на височината към нея

// Резултатът да се закръгли до 3 цифри след десетичната запетая. 