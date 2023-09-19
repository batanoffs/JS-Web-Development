function search() {
   const items = Array.from(document.getElementById(`towns`).children);
   const result = document.getElementById(`result`);
   const input = document.getElementById(`searchText`);
   let counter = 0;

   if(input.value !== ``) {
      for (let item of items) {
         if (item.textContent.includes(input.value)) {
            counter ++;
            item.style.fontWeight = `bold`;        
            item.style.textDecoration = `underline`;        
         } 
      }
   } 
   result.textContent = "";
   if (counter > 0) {
      result.textContent = `${counter} matches found`;   
   }
   //asd
}