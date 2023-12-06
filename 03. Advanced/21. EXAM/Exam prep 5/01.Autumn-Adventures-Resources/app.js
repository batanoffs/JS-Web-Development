window.addEventListener('load', solve);

function solve() {
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const placeInput = document.getElementById('place');
    const eventInput = document.getElementById('event-name');
    const contactsInput = document.getElementById('email');
    const addEventBtn = document.getElementById('add-btn');
    const checkList = document.getElementById('check-list');  
    const upcomingEvents = document.getElementById('upcoming-list');
    const finishedEvents = document.getElementById('finished-list');
    const clearBtn = document.getElementById('clear');

    addEventBtn.addEventListener('click', onFormSubmit);
    clearBtn.addEventListener('click', onClear);

    function onFormSubmit(e) {
        const form = e.target.parentElement;
        const time = timeInput.value;
        const date = dateInput.value;
        const place = placeInput.value;
        const event = eventInput.value;
        const contacts = contactsInput.value;
        if(!time || !date || !place || !event || !contacts) {
            return;
        }

        

        const li = create("li", checkList, {"class":"event-content"});
        const artile = create("article", li);
        create("p", artile,undefined, `Begins: ${dateInput.value} at: ${timeInput.value}`);
        create("p", artile,undefined, `In: ${placeInput.value} `);
        create("p", artile,undefined, `Event: ${eventInput.value} `);
        create("p", artile,undefined, `Contact: ${contactsInput.value} `);
        const editBtn = create("button", li, {"class":"edit-btn"}, "Edit");
        const continueBtn = create("button", li, {"class":"continue-btn"}, "Continue"); 

        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);

        form.reset();
        addEventBtn.disabled = true;

        function onEdit() {
            timeInput.value = time;
            dateInput.value = date;
            placeInput.value = place;
            eventInput.value = event;
            contactsInput.value = contacts;

            addEventBtn.disabled = false;
            li.remove();
        }

        function onContinue() {
            li.remove();
            addEventBtn.disabled = false;
            editBtn.removeEventListener('click', onEdit);
            continueBtn.removeEventListener('click', onContinue);
            editBtn.remove(); // maybe not remove the edit button
            continueBtn.remove();

            const moveToFinishedBtn = create("button", li, {"class": "finished-btn"}, "Move to Finished");
            moveToFinishedBtn.addEventListener('click', onMoveToFinished);

            upcomingEvents.appendChild(li);

            function onMoveToFinished() {                
                li.remove();
                moveToFinishedBtn.remove();     
                finishedEvents.appendChild(li);

                
            }        
        }
        
    }

    function onClear(e) {
        e.stopPropagation();        
        finishedEvents.lastChild.remove()                            
    }

    // Helper function to create an HTML element.
    function create(elementType,parentElement,attributes = {},content = "") {
        const element = document.createElement(elementType);

        if(!(attributes == {})){
            for (const [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }
        }
        
        element.textContent = content;        

        if (parentElement) {
            parentElement.appendChild(element);
        }

        return element;
    }

}


    
    
