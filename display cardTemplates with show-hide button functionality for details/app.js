import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

let cardTemplate = (c) => html` <li>
<img src="./images/${c.imageLocation}.jpg" width="250"height="250">
<div class="info">
<button class="showBtn" @click=${onClick}>Show status code</button>
<div class="status" style="display: none" id="${c.id}">
<h4>Status Code: ${c.statusCode}</h4>
<p>${c.statusMessage}</p>
</div>
</div>
</li>`

function onClick(e) {
    let cat = e.target.parentNode; // div el
    console.log(cat);

    let result = cat.querySelector('.status').style.display;
    
    if (result == 'block') {
        cat.querySelector('.status').style.display = 'none';
        e.target.textContent = 'Show status code'
    } else {
        cat.querySelector('.status').style.display = 'block'
        e.target.textContent = 'Hide status code'
    }
}

let result = cats.map(cardTemplate);
let main = document.getElementById('allCats')
render(result, main)