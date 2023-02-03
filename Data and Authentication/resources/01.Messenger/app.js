const url = `http://localhost:3030/jsonstore/messenger`;
const messages = document.getElementById('messages');

function attachEvents() {
    document.getElementById('submit').addEventListener('click', postMessage);
    document.getElementById('refresh').addEventListener('click', loadAllMessages);

}

async function loadAllMessages() {
    const responce = await fetch(url);
    const data = await responce.json()

    messages.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');
}

async function postMessage() {
    let inputs = document.querySelectorAll('input');


    const [author, content] = [inputs[0], inputs[1]];
    if (author.value !== '' || content.value !== '') {
        await request(url, { author: author.value, content: content.value });
        author.value = '';
        content.value = '';
    }
}

async function request(url, option) {
    const responce = '';
    if (option) {
        option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(option)
        };
        
    }
    responce = await fetch(url, option);

    return responce.json();
}
attachEvents();