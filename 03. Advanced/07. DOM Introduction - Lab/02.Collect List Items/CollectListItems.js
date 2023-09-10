function extractText() {
    const list = document.getElementById("items");
    const items = Array.from(list.children);

    const result = items
        .map( x => x.textContent)
        .join(`\n`);

    let output = document.getElementById(`result`)
    output.value = result;
}
