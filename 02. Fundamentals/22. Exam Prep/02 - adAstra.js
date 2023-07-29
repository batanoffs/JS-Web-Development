function adAstra(data) {

   let text = data[0];
   let pattern = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g

   let calories = 0;
   let buffer = "";

   let match = pattern.exec(text);

   while (match) {
      let item = match.groups["item"];
      let date = match.groups["date"];
      let cal = Number(match.groups["calories"]);

      calories += cal;
      buffer += `Item: ${item}, Best before: ${date}, Nutrition: ${cal}\n`
      
      match = pattern.exec(text)
   }
   let food = Math.floor(calories / 2000);
   console.log(`You have food to last you for: ${food} days!`);
   console.log(buffer);
}

// adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);

// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);