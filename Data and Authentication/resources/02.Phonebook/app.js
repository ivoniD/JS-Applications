function attachEvents() {

    const url = 'http://localhost:3030/jsonstore/phonebook';

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const phonebookUlElement = document.getElementById('phonebook');

    const loadBtn = document.getElementById('btnLoad').addEventListener('click', loadAll);
    const createBtn = document.getElementById('btnCreate').addEventListener('click', createNew);

    async function loadAll() {

        phonebookUlElement.innerHTML = '';

        const responce = await fetch(url);
        const data = await responce.json();

        Object.values(data).forEach(x => {

            const li = document.createElement('li');
            li.textContent = `${x.person}: ${x.phone}`;
            li.id = x._id;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.id = 'del';

            li.appendChild(deleteBtn);
            phonebookUlElement.appendChild(li);

            deleteBtn.addEventListener('click', deleteSelected);

        });
    }

    async function createNew() {
        if (personInput.value !== '' && phoneInput.value !== '') {

            const responce = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ person: personInput.value, phone: phoneInput.value })
            })

            personInput.value = '';
            phoneInput.value = '';
        }
        loadAll()
    }

    async function deleteSelected(ev) {

        const id = ev.target.parentNode.id;
        ev.target.parentNode.remove();

        const urlToDelete = `${url}/${id}`
        const response = await fetch(urlToDelete, {
            method: 'DELETE'
        });
    }

}

attachEvents();