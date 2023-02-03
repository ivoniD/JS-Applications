import { editBook, getBookById } from "./data.js";
import { html } from "./node_modules/lit-html/lit-html.js";


const editTemplate = (book, onSubmit) => html`
        <section id="editPage">
            <form @submit=${onSubmit} class="editForm">
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value="${book.name}">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value="${book.breed}">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value="${book.age}">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value="${book.weight}">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value="${book.image}">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
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

        let name = formData.get('name').trim()
        let breed = formData.get('breed').trim()
        let age = formData.get('age').trim()
        let weight = formData.get('weight').trim()
        let image = formData.get('image').trim()

        if (name == '' || breed == '' || age == '' || weight == '' || image =='') {
            return alert('Please, fill all fields!')
        }

        await editBook(ctx.params.id, {
            name,
            breed,
            age,
            weight,
            image
        }
        );

        ctx.page.redirect('/details/' + ctx.params.id) // същото като book._id
    }
}