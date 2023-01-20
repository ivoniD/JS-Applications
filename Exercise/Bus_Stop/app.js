async function getInfo() {

    let stopElement = document.getElementById('stopId');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopElement.value}`;

    let stopNameEl = document.getElementById('stopName');
    let ulBuses = document.getElementById('buses');

    try {
        const responce = await fetch(url);
        const data = await responce.json();
        stopNameEl.textContent = data.name;
        ulBuses.innerHTML = '';
        stopElement.value = '';

        Object.entries(data.buses).forEach(e => {
            let busID = e[0];
            let time = e[1];
            let message = `Bus ${busID} arrives in ${time} minutes`
            let liEl = document.createElement('li');
            liEl.textContent = message;
            ulBuses.appendChild(liEl);
        });

        if (responce.status !== 200) {
            stopNameEl.textContent = 'Error';
            stopElement.value = '';
            ulBuses.innerHTML = '';
        }

    } catch (error) {
        stopNameEl.textContent = 'Error';
        stopElement.value = '';
        ulBuses.innerHTML = '';
    }




}