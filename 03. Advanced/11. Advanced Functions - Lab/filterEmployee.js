function filterEmployee(data, criteria) {
    const dataParsed = JSON.parse(data);

    if (criteria === `all`) {
        dataParsed.map((x) =>
            console.log(`${Number(x.id) - 1}. ${x.first_name} ${x.last_name} - ${x.email}`)
        );
    } else {
        dataParsed.map((obj) => {
            
        })
    }
}

const input1 = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`;
const input2 = `[{
      "id": "1",
      "first_name": "Kaylee",
      "last_name": "Johnson",
      "email": "k0@cnn.com",
      "gender": "Female"
    }, {
      "id": "2",
      "first_name": "Kizzee",
      "last_name": "Johnson",
      "email": "kjost1@forbes.com",
      "gender": "Female"
    }, {
      "id": "3",
      "first_name": "Evanne",
      "last_name": "Maldin",
      "email": "emaldin2@hostgator.com",
      "gender": "Male"
    }, {
      "id": "4",
      "first_name": "Evanne",
      "last_name": "Johnson",
      "email": "ev2@hostgator.com",
      "gender": "Male"
    }]`;

const criteria1 = "gender-Female";
const criteria2 = "last_name-Johnson";

filterEmployee(input1, `all`);
