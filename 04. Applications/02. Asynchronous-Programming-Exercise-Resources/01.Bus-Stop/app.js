async function getInfo() {
    const busId = document.getElementById("stopId");
    const divBusName = document.getElementById("stopName");
    const busesResult = document.getElementById("buses");
    const URL = `http://localhost:3030/jsonstore/bus/businfo/`;

    const busName = busId.value;
    if (!busName) {
        divBusName.textContent = `Error`;
        return;
    }
    busId.value = "";

    try {
        const res = await fetch(URL + busName);
        // if (res.status === 200) {
        const data = await res.json();
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
        // } else if (res.status !== 200) {

        // }
    } catch (err) {
        divBusName.textContent = `Error`;
        console.log(err);
    }
}
