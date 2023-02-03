import { editBook, getBookById } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";


const editTemplate = (book, onSubmit) => html`
  <section id="edit-meme">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${book.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${book.description}>
                            
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${book.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
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

        if (title == '' || description == '' || imageUrl == '') {
            return alert('Please, fill all fields!')
        }

        await editBook(ctx.params.id, {
            title,
            description,
            imageUrl
          });


        ctx.page.redirect('/catalog') // същото като book._id
    }
}