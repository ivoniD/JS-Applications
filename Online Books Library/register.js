import { register } from "./api.js";
import { html } from "./node_modules/lit-html/lit-html.js";

const registertemplate = (onSubmit) => html`
<section id="register-page" class="register">
    <form @submit=${onSubmit} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`

export function registerPage(ctx) {
    ctx.render(registertemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        let rePass = formData.get('confirm-pass').trim()

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