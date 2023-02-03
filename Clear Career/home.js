import { getAllOffers } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";


const homeTemplate = (books) => html`
<section id="home">
          <img
            src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
            alt="home"
          />
          <h2>Searching for a job?</h2>
          <h3>The right place for a new career start!</h3>
        </section>
`

        export async function homePage(ctx){
            let books = await getAllOffers()
            ctx.render(homeTemplate(books))
        }

