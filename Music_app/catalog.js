import { getAllBooks } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";
console.log('test')
const catalogTemplate = (books) => html`

<section id="catalogPage">
            <h1>All Albums</h1>
            
            ${books.length == 0 
     ? html`<p>No Albums in Catalog!</p>`
     : html`${books.map(event)}`   
    }
 </section>
 `

        const event = (book) => html`
     <div class="card-box">
                <img src=${book.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${book.name}</p>
                        <p class="artist">Artist: ${book.artist}</p>
                        <p class="genre">Genre: ${book.genre}</p>
                        <p class="price">Price: ${book.price}</p>
                        <p class="date">Release Date: ${book.releaseDate}</p>
                    </div>
                    <div class="btn-group">
                        <a href="/details/${book._id}" id="details">Details</a>
                    </div>
                </div>
            </div>
        ` 

        export async function catalogPage(ctx){
            let books = await getAllBooks()
            ctx.render(catalogTemplate(books))
        }

