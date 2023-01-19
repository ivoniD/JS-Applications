function solve() {
    let newtStop = 'depot';
    let stopname = '';

    let infoEl = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    async function depart() {

        const url = `http://localhost:3030/jsonstore/bus/schedule/${newtStop}`;
        const responce = await fetch(url);
        if (responce.status !== 200) {
            infoEl.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;

        }
        const data = await responce.json();
        stopname = data.name;
        infoEl.textContent = `Next stop ${stopname}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        newtStop = data.next;
    }

    function arrive() {
        infoEl.textContent = `Arriving at ${stopname}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();