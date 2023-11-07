function getInfo() {
  const busId = document.getElementById("stopId");
  const divBusName = document.getElementById("stopName");
  const busesResult = document.getElementById("buses");

  busName = busId.value;
  if (!busName) {
    divBusName.textContent = `Error`;
    return;
  }
  busId.value = "";
  const URL = `http://localhost:3030/jsonstore/bus/businfo/${busName}`;

  fetch(URL)
    .then((res) => {
      if (res.status === 200) return res.json();
      if (res.status !== 200) {
        divBusName.textContent = `Error`;
        return;
      }
    })
    .then((data) => {
      if (data) {
        let ulArr = Array.from(busesResult.children);
        for (let el of ulArr) {
          el.remove();
        }
        divBusName.textContent = data.name;
        for (const [bus, time] of Object.entries(data.buses)) {
          let li = document.createElement("li");
          li.textContent = `Bus ${bus} arrives in ${time} minutes`;
          busesResult.appendChild(li);
        }
      }
    })
    .then((err) => {
      if (err !== undefined) {
        console.log(err);
      }
    });
}