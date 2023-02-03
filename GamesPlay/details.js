import { html } from "./node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById } from "./data.js";
import { getUserData } from "./util.js";


const detailsTemplate = (book, isOwner, onDelete) => html`

<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${book.imageUrl}" />
            <h1>${book.title}</h1>
            <span class="levels">MaxLevel: ${book.maxLevel}</span>
            <p class="type">${book.category}</p>
        </div>

        <p class="text">
            ${book.summary}
        </p>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        <div class="buttons">
            ${bookControlsTemplate(book, isOwner, onDelete)}
        </div>
    </div>
    </section>
`

let bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`
            <a href="/edit/${book._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
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