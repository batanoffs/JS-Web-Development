
// DOM selectors
const tableBody = document.querySelector("tbody");
const formElement = document.querySelector("#form");


// API endpoint URL
const API_URL = "http://localhost:3030/jsonstore/collections/students";

// Attach event listener after DOM is loaded
formElement.addEventListener("submit", getStudentForm); // getStudentForm

async function getStudentForm(event) {
    event.preventDefault();
    const form = new FormData(formElement);
    const fistNameInput = form.get("firstName");
    const lastNameInput = form.get("lastName");
    const facultyNumberInput = form.get("facultyNumber");
    const gradeInput = form.get("grade");
    if (
        !fistNameInput ||
        !lastNameInput ||
        !facultyNumberInput ||
        !gradeInput
    ) {
        throw new Error("All fields are required");
    }
    const methodURL = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "firstName": fistNameInput,
            "lastName": lastNameInput,
            "facultyNumber": facultyNumberInput,
            "grade": gradeInput
        }),
    };

    const response = await fetch(API_URL, methodURL);
    const data = await response.json();
    tableBody.innerHTML = "";
    getStudents();
}

async function getStudents() {
    try {
        //get data
        const responseGet = await fetch(API_URL);
        const data = await responseGet.json();

        for (const student of Object.values(data)) {
            //create entry elements
            const row = document.createElement("tr");
            const firstName = document.createElement("td");
            const lastName = document.createElement("td");
            const facultyNumber = document.createElement("td");
            const grade = document.createElement("td");
            debugger;
            //add content
            firstName.textContent = student.firstName;
            lastName.textContent = student.lastName;
            facultyNumber.textContent = student.facultyNumber;
            grade.textContent = student.grade;
            //append
            row.appendChild(firstName);
            row.appendChild(lastName);
            row.appendChild(facultyNumber);
            row.appendChild(grade);
            tableBody.appendChild(row);
        }
    } catch (error) {
        console.log(error);
    }
}
getStudents();