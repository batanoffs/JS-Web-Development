function centuriesToMinutes(century) {
  let minutes = 0;
  let hours = 0;
  let days = 0;
  let years = 0;
  
  years = 100 * century;
  days = Math.trunc (years * 365.2422);
  hours = days * 24;
  minutes = hours * 60;

  console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
centuriesToMinutes(1);