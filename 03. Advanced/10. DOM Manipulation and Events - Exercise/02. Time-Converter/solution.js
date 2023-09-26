function attachEventsListeners() {
   const daysBtn = document.querySelector(`#daysBtn`);
   const hoursBtn = document.querySelector(`#hoursBtn`);
   const minutesBtn = document.querySelector(`#minutesBtn`);
   const secondsBtn = document.querySelector(`#secondsBtn`);

   const inputDays = document.querySelector(`#days`);
   const inputHours = document.querySelector(`#hours`);
   const inputMinutes = document.querySelector(`#minutes`);
   const inputSeconds = document.querySelector(`#seconds`);

   daysBtn.addEventListener(`click`, convert);
   hoursBtn.addEventListener(`click`, convert);
   minutesBtn.addEventListener(`click`, convert);
   secondsBtn.addEventListener(`click`, convert);

   function convert(event) {
      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      const parent = event.target.parentElement;

      if (parent.textContent.includes(`Days`)) {
         days = Number(parent.querySelector(`#days`).value);
         hours = days * 24;
         minutes = hours * 60;
         seconds = minutes * 60;
      }
      if (parent.textContent.includes(`Hours`)) {
         hours = Number(parent.querySelector(`#hours`).value);
         days = hours / 24;
         minutes = hours * 60;
         seconds = minutes * 60;
      }
      if (parent.textContent.includes(`Minutes`)) {
         minutes = Number(parent.querySelector(`#minutes`).value);
         hours = minutes / 60;
         days = hours / 24;
         seconds = minutes * 60;
      }
      if (parent.textContent.includes(`Seconds`)) {
         seconds = Number(parent.querySelector(`#seconds`).value);
         minutes = seconds / 60;
         hours = minutes / 60;
         days = hours / 24;
      }
      inputDays.value = days;
      inputHours.value = hours;
      inputMinutes.value = minutes;
      inputSeconds.value = seconds;
   }
}
