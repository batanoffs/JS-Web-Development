function fine(input) {
  let openTabs = Number(input[0]);
  let salary = Number(input[1]);
  let currentWebsite = ``;

  for (i = 2; i <= openTabs+1; i ++) {
    currentWebsite = input[i];

    if (currentWebsite === "Facebook") {
      salary -= 150;
    } else if (currentWebsite === "Instagram") {
      salary -= 100;  
    } else if (currentWebsite === "Reddit") {
      salary -= 50;
    }
    
    if (salary <= 0) {
      console.log("You have lost your salary.");
      return;
    }       
  }
  console.log(salary);
}

fine(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])