function meetings (data) {

   let result = {};


  for (const el of data) {
   let [day, name] = el.split(" ");
   result[day] = name;
  }
  console.log(result);
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);


meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);