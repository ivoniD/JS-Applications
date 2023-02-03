import { html } from './node_modules/lit-html/lit-html.js'

export const gamesPreview = (book) => html`
        <div class="allGames">
            <div class="allGames-info">
                <img src="${book.imageUrl}">
                <h6>${book.category}</h6>
                <h2>${book.title}</h2>
                <a href="/details/${book._id}" class="details-button">Details</a>
            </div>
        </div>
`


