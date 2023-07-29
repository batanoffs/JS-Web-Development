function softUniBar (input) {

   let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;

   let i = 0;
   let currenLine = input[i];
   let result = 0;
   while(currenLine !== 'end of shift') {

      let match = [...currenLine.matchAll(pattern)];


      for (const el of match) {
         let prices = Number(el.groups.quantity) * Number(el.groups.price);
         result += prices;
         console.log(`${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`);
      }
      i++;
      currenLine = input[i];
   }
   console.log(`Total income: ${result.toFixed(2)}`);
}

softUniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);


// softUniBar();