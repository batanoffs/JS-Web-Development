function generateReport() {
    const output = document.getElementById(`output`);
    const result = [];
    const checks = Array.from(document.querySelectorAll(`thead tr th input`));
    const trs = Array.from(document.querySelectorAll(`tbody tr`));
    trs.forEach( row => {
        const current = {};
        Array.from(row.querySelectorAll(`td`)).forEach((x,i) => {
            if (checks[i].checked) {
                current[checks[i].name] = x.textContent
            }
        })
        result.push(current)
    })
    output.value = JSON.stringify(result);
}