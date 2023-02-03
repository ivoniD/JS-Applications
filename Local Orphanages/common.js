import { html } from './node_modules/lit-html/lit-html.js'

export const bookPreview = (book) => html`

<div class="all-posts">
<div class="post">
    <h2 class="post-title">${book.title}</h2>
    <img class="post-image" src=${book.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${book._id}" class="details-btn btn">Details</a>
    </div>
</div>

`




