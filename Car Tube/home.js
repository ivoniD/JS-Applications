import { getAllBooks } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";
console.log('test')
const homeTemplate = (books) => html`

<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
        ${books.length == 0 
         ? html`<p class="no-memes">No memes in database.</p>`
         : html`${books.map(bookPreview)}`   
        }

			</div>
        </section>
        `

        export async function homePage(ctx){
            let books = await getAllBooks()
            ctx.render(homeTemplate(books))
        }


  