import { getMyBooks } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";
import { getUserData } from "./util.js";

const profileTemplate = (books, userData) => html`

<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${userData.email}</h2>
            </div>
            <div class="board">
                <div class="eventBoard">
                ${books.length == 0 
      ? html`<div class="no-events">
                    <p>This user has no events yet!</p>
                </div>`
      : html`${books.map(bookCard)}`   
     }
                </div>     
            </div>
        </section>
        `

        const bookCard = (book) => html`

<div class="event-info">
     <img src=${book.imageUrl}>
 <h2>${book.title}</h2>
<h6>${book.date}</h6>
     <a href="/details/${book._id}" class="details-button">Details</a>
        </div>
        `

        export async function profilePage(ctx){
            let userData = getUserData()
            let books = await getMyBooks(userData.id)
            ctx.render(profileTemplate(books, userData))
        }


   