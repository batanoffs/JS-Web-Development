function solve() {
    //select items
    const [input, output] = document.querySelectorAll(`textarea`);
    const [generateBtn, buyBtn] = document.querySelectorAll(`button`);
    const tableBody = document.querySelector(`tbody`);

    //event listeners
    generateBtn.addEventListener(`click`, generate);
    buyBtn.addEventListener(`click`, calculate);

    //business logic
    function generate() {
        const arrayInput = JSON.parse(input.value);

        for (const obj of arrayInput) {
            const newRow = document.createElement(`tr`);
            const checkBox = document.createElement(`input`);
            checkBox.type = `checkbox`;
            const imgCol = document.createElement(`td`);
            const nameCol = document.createElement(`td`);
            const priceCol = document.createElement(`td`);
            const decorCol = document.createElement(`td`);
            const imgP = document.createElement(`img`);
            const nameP = document.createElement(`p`);
            const priceP = document.createElement(`p`);
            const decorationP = document.createElement(`p`);
            nameP.textContent = obj.name;
            imgP.src = obj.img;
            priceP.textContent = Number(obj.price);
            decorationP.textContent = Number(obj.decFactor);

            imgCol.appendChild(imgP);
            nameCol.appendChild(nameP);
            priceCol.appendChild(priceP);
            decorCol.appendChild(decorationP);

            newRow.appendChild(imgCol);
            newRow.appendChild(nameCol);
            newRow.appendChild(priceCol);
            newRow.appendChild(decorCol);
            newRow
                .appendChild(document.createElement(`td`))
                .appendChild(checkBox);

            tableBody.appendChild(newRow);
        }
    }

    function calculate() {
        let checkboxes = Array.from(
            document.querySelectorAll(`.table input`)
        ).filter((x) => x.checked);
        const bought = [];
        let price = 0;
        let decofactor = 0;

        checkboxes.forEach((element) => {
            const parent = element.parentElement.parentElement;
            const data = Array.from(parent.querySelectorAll(`p`));
            bought.push(data[0].textContent);
            price += Number(data[1].textContent);
            decofactor += Number(data[2].textContent);
        });

        output.textContent += `Bought furniture: ${bought.join(`, `)}\r\n`;
        output.textContent += `Total price: ${price.toFixed(2)}\r\n`;
        output.textContent += `Average decoration factor: ${
            decofactor / checkboxes.length
        }`;
    }
}
