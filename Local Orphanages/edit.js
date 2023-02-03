import { editBook, getBookById } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";


const editTemplate = (book, onSubmit) => html`
<section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" value="${book.title}">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" value="${book.description}">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" value="${book.imageUrl}">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" value="${book.address}">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" value="${book.phone}">
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>

`

 export async function editPage(ctx) {
    const book = await getBookById(ctx.params.id);
    ctx.render(editTemplate(book, onSubmit))

    async function onSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.target)

        let title = formData.get('title').trim()
        let description = formData.get('description').trim()
        let imageUrl = formData.get('imageUrl').trim()
        let address = formData.get('address').trim()
        let phone = formData.get('phone').trim()

        if (title == '' || description == '' || imageUrl == '' || address == '' || phone =='') {
            return alert('Please, fill all fields!')
        }

        await editBook(ctx.params.id, {
            title,
            description,
            imageUrl,
            address,
            phone
          }
          );

        ctx.page.redirect('/details/' + ctx.params.id) // същото като book._id
    }
}