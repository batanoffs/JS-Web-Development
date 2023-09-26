function lockedProfile() {
    //constants
    const SHOW_MORE = `Show more`;
    const HIDE_IT = `Hide it`;

    //select items
    const [buttonUser1, buttonUser2, buttonUser3] =
        document.querySelectorAll(`.profile button`);

    buttonUser1.addEventListener(`click`, show);
    buttonUser2.addEventListener(`click`, show);
    buttonUser3.addEventListener(`click`, show);

    function show(event) {
        const parent = event.target.parentElement;
        const isLocked = parent.querySelector(`input[name]`).checked;
        const hiddenElements = parent.querySelector(`div`);
        const button = parent.querySelector(`button`);
        if (!isLocked) {
            if (button.textContent === SHOW_MORE) {
                hiddenElements.style.display = `block`;
                button.textContent = HIDE_IT;
            } else if (button.textContent === HIDE_IT) {
                hiddenElements.style.display = `none`;
                button.textContent = SHOW_MORE;
            }
        }
    }
}
