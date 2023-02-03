import { html } from './node_modules/lit-html/lit-html.js'

export const gamesPreview = (book) => html`
 <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src=${book.image}>
                    </article>
                    <h2 class="name">${book.name}</h2>
                    <h3 class="breed">${book.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${book._id}">Details</a>
                    </div>
                </div>
`


