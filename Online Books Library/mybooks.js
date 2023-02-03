import { getMyBooks } from "./data.js"
import {html} from './node_modules/lit-html/lit-html.js'
import { bookPreview } from "./common.js";
import { getUserData } from "./util.js";

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
            <h1>My Books</h1>

            ${books.length == 0 
           ? html`<p class="no-books">No books in database!</p>`
           : html`<ul class="other-books-list">${books.map(bookPreview)}</ul>`   
            }
            
        </section>
        `

        export async function myBooksPage(ctx){
            let userData = getUserData()
            let books = await getMyBooks(userData.id)
            ctx.render(myBooksTemplate(books))
        }