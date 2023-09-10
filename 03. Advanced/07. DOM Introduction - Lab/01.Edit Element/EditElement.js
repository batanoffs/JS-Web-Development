function editElement() {
   let text = document.getElementById('e1').textContent;
   text = text.replace('%insert name here%', 'Document Object Model');

   document.getElementById('e1').textContent = text;
}