import { getAllGames } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";
import { gamesPreview } from "./CATALOG_part.js" 
console.log('test')
const catalogTemplate = (books) => html`
<section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
        ${books.length == 0 
            ? html`<h3 class="no-articles">No articles yet</h3>`
            : html`${books.map(gamesPreview)}`   
          }

        `

        export async function catalogPage(ctx){
            let books = await getAllGames()
            ctx.render(catalogTemplate(books))
        }


