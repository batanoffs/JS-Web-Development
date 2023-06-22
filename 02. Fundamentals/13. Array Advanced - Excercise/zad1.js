function experienceGain(data) {

   let amountExpRequired = data.shift();
   let numberOfBattles = data.shift();
   let battleCounter = 0;

   let gainedExp = 0;
   
   
   
   
   for (let index = 0; index < numberOfBattles; index++) {
      let currentExperience = data[index];
      battleCounter++;

      if (battleCounter % 3 === 0) {
         currentExperience = currentExperience + 0.15*currentExperience;
         gainedExp += currentExperience;
      } else if (battleCounter % 5 === 0) {
         currentExperience = currentExperience - 0.10*currentExperience;
         gainedExp += currentExperience;
      } else if (battleCounter % 15 === 0) {
         currentExperience = currentExperience + 0.05 * currentExperience;
         gainedExp += currentExperience;
      } else {
         gainedExp += currentExperience;
      }

      if (amountExpRequired <= gainedExp) {
         console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`);
         return;
      }
   }

   let neededExp = amountExpRequired - gainedExp;
   console.log(`Player was not able to collect the needed experience, ${neededExp.toFixed(2)} more needed.`);
}


experienceGain([
   500,

   5,
   
   50,
   
   100,
   
   200,
   
   100,
   
   30]);

console.log(`------------------`);

experienceGain ([
   500,

   5,
   
   50,
   
   100,
   
   200,
   
   100,
   
   20]);

console.log(`------------------`);

   experienceGain([
      400,

      5,
      
      50,
      
      100,
      
      200,
      
      100,
      
      20]);