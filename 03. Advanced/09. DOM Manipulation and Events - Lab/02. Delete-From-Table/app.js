function deleteByEmail() {
    const query = document.querySelector(`input[name="email"]`).value;
    const table = Array.from(document.querySelector(`tbody`).children);
    const result = document.getElementById(`result`);
    let isDeleted = false;

    const match = 
    for (let row of table) {        
        const col = row.children[1];     

        if (col.textContent === query) {
            isDeleted = true;
            row.remove();
            break;
        } 
    }
    result.textContent = isDeleted ? `Deleted.` : `Not found.`;
}