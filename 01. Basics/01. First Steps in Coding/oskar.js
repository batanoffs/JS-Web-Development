function oskar(input) {  
  let actorsName = input[0];
  let academyPoints = 0;
  let allJurryNumber = Number(input[2]);
  let jurryName = ``;
  let jurryPoints = 0;
  let currentJurryPoints = 0;
  let index = 3;
  let totalPoints = 0;

  while (index <= allJurryNumber * 2 + 2) {
    if (currentJurryPoints === 0) {
      academyPoints = Number(input[1]);
    } else {
      academyPoints = currentJurryPoints;
    }
    jurryName = input[index];
    index++;

    jurryPoints = Number(input[index]);
    index++;

    currentJurryPoints = academyPoints + (jurryPoints * jurryName.length) / 2;
    totalPoints = currentJurryPoints;
    if (totalPoints > 1250.5) {
      console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
      return;
    }
  }

  if (totalPoints > 1250.5) {
    console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
  } else {
    let pointsNeeded = 1250.5 - totalPoints;
    console.log(`Sorry, ${actorsName} you need ${pointsNeeded.toFixed(1)} more!`);
  }
}
oskar(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);