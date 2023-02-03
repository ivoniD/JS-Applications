import { html } from "./node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById } from "./data.js";
import { getUserData } from "./util.js";


const detailsTemplate = (book, isOwner, onDelete) => html`

<section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${book.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${book.title}</h2>
                        <p class="post-description">Description: ${book.description}</p>
                        <p class="post-address">Address: ${book.address}</p>
                        <p class="post-number">Phone number: ${book.phone}</p>
                        <div class="btns">
                        ${bookControlsTemplate(book, isOwner, onDelete)}

                        </div>

                    </div>
                </div>
            </div>
        </section>
`

let bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`
            <a class="edit-btn btn" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="delete-btn btn" href="javascript:void(0)">Delete</a>
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