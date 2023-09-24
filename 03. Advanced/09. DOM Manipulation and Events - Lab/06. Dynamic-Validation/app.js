function validate() {
   const pattern = /(?<name>[a-z]+)@(?<domain>[a-z]+).(?<extension>[a-z]+)/gm;
   const input = document.querySelector(`#email`);
   

   input.addEventListener(`change`, () => {
      
      let match = pattern.exec(input.value);

      let name = match.groups["name"];
      let domain = match.groups["domain"];
      let extension = match.groups["extension"];
      if (name && domain && extension) {
        input.classList = ``;
      } else {
        input.classList = `error`;
      }
   });
}
