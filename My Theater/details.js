import { html } from "./node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById } from "./data.js";
import { getUserData } from "./util.js";


const detailsTemplate = (book, isOwner, onDelete) => html`

<section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${book.title}</h1>
                    <div>
                        <img src=${book.imageUrl} />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${book.description}</p>
                    <h4>Date: ${book.date}</h4>
                    <h4>Author: ${book.author}</h4>
                    <div class="buttons">
                    ${bookControlsTemplate(book, isOwner, onDelete)}
                    </div>
                    <p class="likes">Likes: 0</p>
                </div>
            </div>
        </section>
`

let bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`
            <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
            <a class="btn-edit" href="/edit/${book._id}">Edit</a>
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
        ctx.page.redirect('/catalog')
    }


}