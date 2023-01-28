import { getAllGames } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";


const homeTemplate = (books) => html`
        <section class="welcome-content">
            <article class="welcome-content-text">
                <h1>We Care</h1>
                <h1 class="bold-welcome">Your Pets</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </article>
            <article class="welcome-content-image">
                <img src="./images/header-dog.png" alt="dog">
            </article>
        </section>
        `

        export async function homePage(ctx){
            let books = await getAllGames()
            ctx.render(homeTemplate(books))
        }

