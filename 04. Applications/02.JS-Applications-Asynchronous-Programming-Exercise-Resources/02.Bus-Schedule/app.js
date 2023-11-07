// function solve() {
//   const departBtn = document.querySelector("#depart");
//   const arriveBtn = document.querySelector("#arrive");
//   const URL = "http://localhost:3030/jsonstore/bus/schedule/";
//   const info = document.querySelector(".info");
//   let stopName = "depot";

//   async function depart() {
//     try {
//       const res = await fetch(URL + stopName);
//       if (res.ok) {
//         const data = await res.json();
//         info.textContent = `Next stop ${data.name}`;
//         stopName = data.next;
//         departBtn.disabled = true;
//         arriveBtn.disabled = false;
//       } else {
//         info.textContent = "Error";
//         departBtn.disabled = true;
//         arriveBtn.disabled = true;
//       }
//     } catch (error) {
//       info.textContent = "Error";
//       departBtn.disabled = true;
//       arriveBtn.disabled = true;
//     }
//   }

//   async function arrive() {
//     try {
//       const res = await fetch(URL + stopName);
//       if (res.ok) {
//         const data = await res.json();
//         info.textContent = `Arriving at ${data.name}`;
//         stopName = data.next;
//         departBtn.disabled = false;
//         arriveBtn.disabled = true;
//       } else {
//         info.textContent = "Error";
//         departBtn.disabled = true;
//         arriveBtn.disabled = true;
//       }
//     } catch (error) {
//       info.textContent = "Error";
//       departBtn.disabled = true;
//       arriveBtn.disabled = true;
//     }
//   }

//   return {
//     depart,
//     arrive,
//   };
// }
// let result = solve();
function solve() {
  const departBtn = document.querySelector("#depart");
  const arriveBtn = document.querySelector("#arrive");
  const URL = "http://localhost:3030/jsonstore/bus/schedule/";
  const info = document.querySelector("div[id='info'] span");
  let nextStop = "depot";

  async function fetchBusData() {
    try {
      const response = await fetch(URL + nextStop);
      if (response.ok) {
        return response.json();
      } else {
        info.textContent = "Error";
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      }
    } catch (error) {
      info.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  async function updateInfo(data) {
    info.textContent = data;
  }

  async function depart() {
    try {
      const data = await fetchBusData();
      await updateInfo(`Next stop ${data.name}`);
      nextStop = data.next;
      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (error) {
      info.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  async function arrive() {
    try {
      const data = await fetchBusData();
      await updateInfo(`Arriving at ${data.name}`);
      nextStop = data.next;
      departBtn.disabled = false;
      arriveBtn.disabled = true;
    } catch (error) {
      info.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
