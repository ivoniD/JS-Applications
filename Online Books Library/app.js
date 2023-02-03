
//window.console.log('hi');
//window.console.log('good luck');

import {html, render} from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./util.js";
import page from "./node_modules/page/page.mjs";
import { logout } from "./api.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { homePage } from "./home.js";
import { createPage } from "./create.js";
import { myBooksPage } from "./mybooks.js";
import { detailsPage } from "./details.js";


let root = document.getElementById('site-content');

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav;
    next();
}

export function updateUserNav(){
    let userData = getUserData();
    if(userData){
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    }else{
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline-block'
    }
}

document.getElementById('logoutBtn').addEventListener('click', (e) =>{
    e.preventDefault()
    logout()
    updateUserNav()
    page.redirect('/');
})

page(decorateContext);
page('/', homePage)
page('/login', loginPage);
page('/register', registerPage)
page('/create', createPage)
page('/myBooks', myBooksPage)
page('/details/:id', detailsPage)
updateUserNav();
page.start();