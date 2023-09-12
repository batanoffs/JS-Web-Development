function sumTable() {
   let rows = document.querySelectorAll(`table tr`);
   let cost = 0;
   let index = 0;

   for (let row of rows) {

      if(index > 0 && index < rows.length) {
         let child = row.children;    
         let currentCost = Number(child[1].textContent);
         cost += currentCost;
      }      
      index++; 
   }   
   document.getElementById(`sum`).textContent= cost;
}