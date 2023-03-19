// Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта.
// Изготвянето на един проект отнема три часа.


// Вход
// От конзолата се четат 2 реда:
// 1. Името на архитекта - текст
// 2. Брой на проектите, които трябва да изготви - цяло число в интервала[0 … 100]
// Изход
// На конзолата се отпечатва:
// · "The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."



function projectCreation(input) {

    let archName = input[0];
    let projects = Number(input[1]);
    let hours = projects * 3;

    console.log(`The architect ${archName} will need ${hours} hours to complete ${projects} project/s.`)

}

projectCreation(["George ","4 "]);