import { html } from './node_modules/lit-html/lit-html.js'

export const mybookPreview = (book) => html`

<div class="user-meme">
                    <p class="user-meme-title">${book.title}</p>
                    <img class="userProfileImage" alt="meme-img" src="${book.imageUrl}">
                    <a class="button" href="/details/${book._id}">Details</a>
                </div>

`



