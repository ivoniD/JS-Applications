import { getMyBooks } from "./data.js"
import {html} from './node_modules/lit-html/lit-html.js'
import { bookPreview } from "./common.js";
import { getUserData } from "./util.js";

const myBooksTemplate = (books) => html`
<section id="my-posts-page">
            <h1 class="title">My Posts</h1>

            ${books.length == 0 
           ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
           : html`<div class="my-posts">${books.map(bookPreview)}</div>`   
            }
            
        </section>
        `

        export async function myBooksPage(ctx){
            let userData = getUserData()
            let books = await getMyBooks(userData.id)
            ctx.render(myBooksTemplate(books))
        }

       
     