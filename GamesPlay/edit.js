import { editBook, getBookById } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";


const editTemplate = (book, onSubmit) => html`
<section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value="${book.title}">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value="${book.category}">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value="${book.maxLevel}">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="${book.imageUrl}">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${book.summary}></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

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
        let category = formData.get('category').trim()
        let maxLevel = formData.get('maxLevel').trim()
        let imageUrl = formData.get('imageUrl').trim()
        let summary = formData.get('summary').trim()

        if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary =='') {
            return alert('Please, fill all fields!')
        }

        await editBook(ctx.params.id, {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        }
        );

        ctx.page.redirect('/details/' + ctx.params.id) // същото като book._id
    }
}