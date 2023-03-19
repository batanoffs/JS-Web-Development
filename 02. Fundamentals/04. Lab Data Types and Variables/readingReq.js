function readingReq (totalPages, pagesPerHour, daysToFinish) {

  let readingTime = totalPages / pagesPerHour;
  let numberOfHours = readingTime / daysToFinish;
  console.log(numberOfHours);
}

readingReq(432,  15 ,  4 );