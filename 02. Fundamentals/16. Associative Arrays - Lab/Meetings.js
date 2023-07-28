function Meetings(data) {
   let meetings = {};
   for (let entry of data) {
      let [weekday, name] = entry.split(' ');

      if(meetings.hasOwnProperty(weekday)) {
         console.log(`Conflict on ${weekday}!`);
      } else {
         meetings[weekday] = name;
         console.log(`Scheduled for ${weekday}`);
      }
   }
   for (let[key, value] of Object.entries(meetings)) {
      console.log(`${key} -> ${value}`);
      }
}

Meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

// Meetings(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);