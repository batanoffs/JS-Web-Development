function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);
   const input = document.querySelector(`#inputs>textarea`);
   const bestRestaurants = document.querySelector(`#bestRestaurant>p`);
   const workersP = document.querySelector(`#outputs #workers p`);

   function onClick() {
      let arr = JSON.parse(input.value);
      let restaurants = {};

      arr.forEach((line) => {
         debugger
         const tokens = line.split(` - `);
         const name = tokens[0];
         const workersArray = tokens[1].split(`, `);
         let workers = [];

         for (const worker of workersArray) {
            let workerTokens = worker.split(" ");
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary });
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let avgSalary =
            workers.reduce((sum, worker) => sum + worker.salary, 0) /
            workers.length;

         restaurants[name] = {
            workers,
            avgSalary,
            bestSalary,
         };
      });

      let bestRestaurantSalary = 0;
      let best = undefined;

      for (const name in restaurants) {
         if (restaurants[name].avgSalary > bestRestaurantSalary) {
            bestRestaurantSalary = restaurants[name].avgSalary;
            best = { name, ...restaurants[name] };
         }
      }

      bestRestaurants.textContent = `Name: ${
         best.name
      } Average Salary: ${best.avgSalary.toFixed(
         2
      )} Best Salary: ${best.bestSalary.toFixed(2)}`;

      let workersResult = [];
      best.workers.forEach((worker) => {
         workersResult.push(
            `Name: ${worker.name} With Salary: ${worker.salary}`
         );
      });
      workersP.innerText = workersResult.join(" ");
   }
}
