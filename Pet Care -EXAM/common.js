import { html } from './node_modules/lit-html/lit-html.js'

export const bookPreview = (book) => html`
<div class="game">
<div class="image-wrap">
    <img src="${book.imageUrl}">
</div>
<h3>${book.title}</h3>
<div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
<div class="data-buttons">
<a href="/details/${book._id}" class="btn details-btn">Details</a> */
</div>
</div>
`




{/* <div class="game">
                    <div class="image-wrap"></div>
<img src="${book.imageUrl}">
</div>
<h3>${book.title}</h3>
<div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
<div class="data-buttons">
    <a href="/details/${book._id}" class="btn details-btn">Details</a> */}
