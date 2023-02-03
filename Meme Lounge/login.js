import { login } from "./api.js";
import { html } from "./node_modules/lit-html/lit-html.js";

let loginTemplate = (onSubmit) => html` 
        <section id="login">
            <form @submit=${onSubmit} id="login-form">
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`

export function loginPage(ctx) {
    window.console.log(ctx)
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(event) {
        // console.log('hellooo')
        event.preventDefault();
        let formData = new FormData(event.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()

        if (email == '' || password == '') {
            return alert('Please, fill all fields!')
        }

        await login(email, password);
        ctx.updateUserNav()
        ctx.page.redirect('/catalog');
    }
}