// За лятната ваканция в списъка със задължителна литература на Жоро има определен брой книги.
// Понеже Жоро предпочита да играе с приятели навън, вашата задача е да му помогнете да изчисли 
// колко часа на ден трябва да отделя, за да прочете необходимата литература.

//  Вход

// От конзолата се четат 3 реда:
// 1. Брой страници в текущата книга – цяло число в интервала[1…1000]
// 2. Страници, които прочита за 1 час – цяло число в интервала[1…1000]
// 3. Броят на дните, за които трябва да прочете книгата – цяло число в интервала[1…1000]

//  Изход

// Да се отпечата на конзолата броят часове, които Жоро трябва да отделя за четене всеки ден.




function vacationBooksList(input) {

    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let totalDaysPerBook = Number(input[2]);

    let totalHoursReading = totalPages / pagesPerHour;
    let hoursReadingPerDay = totalHoursReading / totalDaysPerBook;
    
    console.log(hoursReadingPerDay);

}

vacationBooksList(["212 ","20 ","2"])