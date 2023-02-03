import { getAllBooks } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";

const hometemplate = (books) => html`
  
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>

            ${books.length == 0 ?
           html` <h1 class="title no-posts-title">No posts yet!</h1>`:
          html`<div class="all-posts">${books.map(bookPreview)}</div>`   
          }
            
        </section>

        `

        export async function homePage(ctx){
            let books = await getAllBooks()
            ctx.render(hometemplate(books))
        }

  