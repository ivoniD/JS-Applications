import { getAllGames } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";
import { gamesPreview } from "./CATALOG_part.js" 
console.log('test')
const catalogTemplate = (books) => html`

<section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
               
            ${books.length == 0 
            ? html` <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`
            : html`${books.map(gamesPreview)}`   
          }

               
            </div>
        </section> 
        `

        export async function catalogPage(ctx){
            let books = await getAllGames()
            ctx.render(catalogTemplate(books))
        }


