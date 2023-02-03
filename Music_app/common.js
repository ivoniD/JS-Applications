import { html } from './node_modules/lit-html/lit-html.js'

export const bookPreview = (book) => html`

<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${book.title}</p>
            <img class="meme-image" alt="meme-img" src="${book.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${book._id}">Details</a>
        </div>
    </div>
</div>

`



