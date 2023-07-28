function schoolGrades(data) {
   let students = {};

   for (let entry of data) {
      let elements = entry.split(' ');
      let student = elements[0];
      let grade = 0;

      if (students.hasOwnProperty(student)) {

         let finalGrade = 0;
         for (let i = 1; i < elements.length; i++) {
            let el = Number(elements[i]);
            finalGrade += el;
         }
         finalGrade /= elements.length - 1;
         grade = (students[student] + finalGrade) / 2;

         students[student] = grade;

      } else {
         for (let i = 1; i < elements.length; i++) {
            let element = Number(elements[i]);
            grade += element;
         }
         grade /= elements.length - 1;
      }
      students[student] = grade;
   }

   let sorted = Object.entries(students);
   sorted.sort((a, b) => a[0].localeCompare(b[0]));

   for (let [key, value] of sorted) {
      console.log(`${key}: ${value.toFixed(2)}`);
   }
}
schoolGrades(['Lilly 4 6 6 5',
   'Tim 5 6',
   'Tammy 2 4 3',
   'Tim 6 6']);

schoolGrades(['Steven 3 5 6 4',
   'George 4 6',
   'Tammy 2 5 3',
   'Steven 6 3']);