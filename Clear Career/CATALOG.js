import { getAllOffers } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { offerPreview } from "./CATALOG_part.js" 
console.log('test')
const catalogTemplate = (books) => html`
        <section id="dashboard">
          <h2>Job Offers</h2>

          ${books.length == 0 
            ? html`<h2>No offers yet.</h2>`
            : html`${books.map(offerPreview)}`   
          }
`

export async function catalogPage(ctx){
    let books = await getAllOffers()
    ctx.render(catalogTemplate(books))
        }


