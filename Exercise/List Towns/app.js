import { html, render } from '../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

const listTemplate = (data) => html`
<ul>
    ${data.map(x => html`<li>${x}</li>`)}
</ul>
`

function getTowns(event) {
    event.preventDefault();
    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(', ');

        const ulEl = document.createElement('ul');

        const result = listTemplate(towns);

        render(result, root);

        document.getElementById('towns').value = '';
       
    }

