import { login } from "./api.js";
import { html } from "./node_modules/lit-html/lit-html.js";

let loginTemplate = (onSubmit) => html` 
     <section id="loginaPage">
            <form @submit=${onSubmit} class="loginForm">
                <h2>Login</h2>
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>
`

export function loginPage(ctx) {
    window.console.log(ctx)
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()

        if (email == '' || password == '') {
            return alert('Please, fill all fields!')
        }

        await login(email, password);
        ctx.updateUserNav()
        ctx.page.redirect('/');
    }
}