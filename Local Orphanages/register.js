import { register } from "./api.js";
import { html } from "./node_modules/lit-html/lit-html.js";

const registertemplate = (onSubmit) => html`
<section id="register-page" class="register">
      <!-- Register Page (Only for Guest users) -->
      <section id="register-page" class="auth">
            <form @submit=${onSubmit} id="register">
                <h1 class="title">Register</h1>

                <article class="input-group">
                    <label for="register-email">Email: </label>
                    <input type="email" id="register-email" name="email">
                </article>

                <article class="input-group">
                    <label for="register-password">Password: </label>
                    <input type="password" id="register-password" name="password">
                </article>

                <article class="input-group">
                    <label for="repeat-password">Repeat Password: </label>
                    <input type="password" id="repeat-password" name="repeatPassword">
                </article>

                <input type="submit" class="btn submit-btn" value="Register">
            </form>
        </section>`

export function registerPage(ctx) {
    ctx.render(registertemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        let rePass = formData.get('repeatPassword').trim()

        if (email == '' || password == '' || rePass == '') {
            return alert('Please, fill all fields!')
        }
        if (password != rePass) {
            return alert("Passwords don't match!")
        }
        await register(email, password);
        ctx.updateUserNav()
        ctx.page.redirect('/')
    }
}