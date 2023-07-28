function piccolo (data) {
   let parking = new Set;

   for (const entry of data) {
      let [direction, plateNumber] = entry.split(", ");

      if (direction === "IN") {
         parking.add(plateNumber);
      } else {
         if(parking.has(plateNumber)) {
            parking.delete(plateNumber);
         }
      }
   }

   if(parking.size === 0) {
      console.log("Parking Lot is Empty");
   } else {
      let sorted = Array.from(parking).sort((a,b) => a.localeCompare(b));
      for (const plate of sorted) {
         console.log(plate);
      }
   }   
}

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);