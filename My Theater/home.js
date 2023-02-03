import { getAllBooks } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";
console.log('test')
const homeTemplate = (books) => html`

<section class="welcomePage">
            <div id="welcomeMessage">
                <h1>My Theater</h1>
                <p>Since 1962 World Theatre Day has been celebrated by ITI Centres, ITI Cooperating Members, theatre
                    professionals, theatre organizations, theatre universities and theatre lovers all over the world on
                    the 27th of March. This day is a celebration for those who can see the value and importance of the
                    art
                    form “theatre”, and acts as a wake-up-call for governments, politicians and institutions which have
                    not
                    yet recognised its value to the people and to the individual and have not yet realised its potential
                    for
                    economic growth.</p>
            </div>
            <div id="events">
                <h1>Future Events</h1>
                <div class="theaters-container">

                    <!--Created Events-->
                    ${books.length == 0 
     ? html`<h4 class="no-event">No Events Yet...</h4>`
     : html`${books.map(event)}`   
    }

                </div>
            </div>
        </section>
        `

        const event = (book) => html`
        <div class="eventsInfo">
                        <div class="home-image">
                            <img src="${book.imageUrl}">
                        </div>
                        <div class="info">
                            <h4 class="title">${book.title}</h4>
                            <h6 class="date">${book.date}</h6>
                            <h6 class="author">${book.author}</h6>
                            <div class="info-buttons">
                                <a class="btn-details" href="/details/${book._id}">Details</a>
                            </div>
                        </div>
                    </div>
        ` 

        export async function homePage(ctx){
            let books = await getAllBooks()
            ctx.render(homeTemplate(books))
        }


    //     <section id="meme-feed">
    //     <h1>All Memes</h1>
    //     <div id="memes">
   

    //     </div>
    // </section>