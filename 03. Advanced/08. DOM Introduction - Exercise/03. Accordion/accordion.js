function toggle() {
    let button = document.getElementsByClassName(`button`)[0];
    let extra = document.getElementById(`extra`);
    let style = extra.style.display;

    if (style == ``) {
        style = `none`
    }

    if(style == `none`) {
        extra.style.display = `block`
        button.textContent = `Less`
    } else if(style = `block`) {
        extra.style.display = `none`
        button.textContent = `More`
    }    
}