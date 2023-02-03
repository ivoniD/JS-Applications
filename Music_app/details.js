import { html } from "./node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById } from "./data.js";
import { getUserData } from "./util.js";


const detailsTemplate = (book, isOwner, onDelete) => html`


<section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${book.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${book.name}</h1>
                        <h3>Artist: ${book.artist}</h3>
                        <h4>Genre: ${book.genre}</h4>
                        <h4>Price: ${book.price}</h4>
                        <h4>Date: ${book.releaseDate}</h4>
                        <p>${book.description}</p>
                    </div>
                    <div class="actionBtn">
                    ${bookControlsTemplate(book, isOwner, onDelete)}
                    </div>
                </div>
            </div>
        </section>
`

let bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`
            <a href="/edit/${book._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
        `
    } else {
        return null;
    }
}


export async function detailsPage(ctx) {
    let userData = getUserData();
if(userData){
    let book = await getBookById(ctx.params.id)

    let isOwner = userData && userData.id == book._ownerId;
    ctx.render(detailsTemplate(book, isOwner, onDelete))


}

    async function onDelete() {
        await deleteBook(ctx.params.id);
        ctx.page.redirect('/catalog')
    }


}