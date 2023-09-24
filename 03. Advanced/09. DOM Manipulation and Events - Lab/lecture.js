// Create element
  document.createElement(`ul`);

// REMOVE ELEMENT
  el.remove();

// Append items to other items
  body.append(el);

// Event listener (type of event, function, true/false for capture or bubble)
  target.addEventListener(`click`, (e) => console.log(`asd`), false)


 
//methods
  preventDefault(); // stops the browser for executing default behaviour
  event.stopPropagation(); // stops the bubble cycle of event
  event.stopImmediatePropagation(); // stops second event in the same target