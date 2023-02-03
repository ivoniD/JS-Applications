import { getAllBooks } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";
console.log('test')
const homeTemplate = (books) => html`

<section id="welcome-world">
            <div class="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero">

            <div id="home-page">
                <h1>Latest Games</h1>
    
                <!-- Display div: with information about every game (if any) -->
       
            ${books.length == 0 
                ? html`<div><p class="no-articles">No games yet</p></div>`
                : html`${books.map(bookPreview)}`   
         }

            </div>
        </section>

        `

        export async function homePage(ctx){
            let books = await getAllBooks()
            ctx.render(homeTemplate(books))
        }

