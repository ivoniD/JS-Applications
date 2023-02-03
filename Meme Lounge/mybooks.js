import { getMyBooks } from "./data.js"
import {html} from './node_modules/lit-html/lit-html.js'
import { bookPreview } from "./common.js";
import { mybookPreview } from "./myMemes.PART.js";
import { getUserData } from "./util.js";

const myBooksTemplate = (books) => html`
<section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: </p>
                    <p>Email: mary@abv.bg</p>
                    <p>My memes count: ${book.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">

                ${books.length == 0 
           ? html`<p class="no-memes">No memes in database.</p>`
           : html`${books.map(mybookPreview)}`   
            }

            </div>
        </section>

        `

        export async function myBooksPage(ctx){
            let userData = getUserData()
            let books = await getMyBooks(userData.id)
            ctx.render(myBooksTemplate(books))
        }

       
     