import { register } from "./api.js";
import { html } from "./node_modules/lit-html/lit-html.js";

const registertemplate = (onSubmit) => html`
 <section id="registerPage">
            <form @submit = ${onSubmit}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>

`

export function registerPage(ctx) {
    ctx.render(registertemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        let rePass = formData.get('conf-pass').trim()

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