import { html } from "./node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById } from "./data.js";
import { getUserData } from "./util.js";


const detailsTemplate = (book, isOwner, onDelete) => html`
 <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${book.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${book.name}</h1>
                        <h3>Breed: ${book.breed}</h3>
                        <h4>Age: ${book.age} years</h4>
                        <h4>Weight: ${book.weight}kg</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${bookControlsTemplate(book, isOwner, onDelete)}
                </div>
            </div>
        </section>
`

let bookControlsTemplate = (book, isOwner, onDelete) => {
 
    if (isOwner) {
        return html`
            <div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->
                        <a href="/edit/${book._id}" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                        <!--(Bonus Part) Only for no creator and user-->
                        <a href="#" class="donate">Donate</a>
                    </div>
     `
    } else {
        return null;
    }
}


export async function detailsPage(ctx) {
    let userData = getUserData();

    let book = await getBookById(ctx.params.id)
    let isOwner = userData && userData.id == book._ownerId;
    ctx.render(detailsTemplate(book, isOwner, onDelete))


    async function onDelete() {
        await deleteBook(ctx.params.id);
        ctx.page.redirect('/')
    }


}