import { editBook, getBookById } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";


const editTemplate = (book, onSubmit) => html`
        <section id="editPage">
            <form @submit=${onSubmit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value=${book.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" value=${book.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                        value=${book.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">${book.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        value=${book.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
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
        let date = formData.get('date').trim()
        let author = formData.get('author').trim()
        let imageUrl = formData.get('imageUrl').trim()
        let description = formData.get('description').trim()

        if (title == '' || date == '' || author == '' || imageUrl == '' || description == '') {
            return alert('Please, fill all fields!')
        }

        await editBook(ctx.params.id, { 
            title,
            date,
            author,
            imageUrl,
            description
          });


        ctx.page.redirect('/details' + ctx.params.id);
    }
}