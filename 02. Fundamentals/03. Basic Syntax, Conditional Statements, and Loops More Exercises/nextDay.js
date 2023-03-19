function getNextDate(year, month, day) {
  const currentDate = new Date(year, month - 1, day);
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate());
  
}

getNextDate(2016, 9, 30);