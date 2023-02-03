import { html } from "./node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById } from "./data.js";
import { getUserData } from "./util.js";


const detailsTemplate = (book, isOwner, onDelete) => html`

<section id="meme-details">
    <h1>Meme Title: ${book.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${book.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${book.description}</p>
            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${bookControlsTemplate(book, isOwner, onDelete)}

        </div>
    </div>
</section>

`

let bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`
            <a class="button warning" href="/edit/${book._id}">Edit</a>
            <button @click=${onDelete} class="button danger" href="javascript:void(0)">Delete</button>
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