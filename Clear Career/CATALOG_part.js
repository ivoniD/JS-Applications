import { html } from './node_modules/lit-html/lit-html.js'

export const offerPreview = (offer) => html`
<div class="offer">
            <img src=${offer.imageUrl} alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href="/details/${offer._id}">Details</a>
          </div>
`


