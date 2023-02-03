console.log('Good luck to me! :)')

import {html, render} from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./util.js";
import page from "./node_modules/page/page.mjs";
import { logout } from "./api.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { homePage } from "./home.js";
import { catalogPage } from "./CATALOG.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";



 let root = document.getElementById('content');

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav;
    next();
}

export function updateUserNav(){
    let userData = getUserData();
    if(userData){
        document.querySelector('.user').style.display = 'inline'
        document.querySelector('.guest').style.display = 'none'

    }else{
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = 'inline'
    }
}

 document.getElementById('logoutButton').addEventListener('click', (e) =>{
     e.preventDefault()
     logout()
    updateUserNav()
     page.redirect('/catalog');
 })

 page(decorateContext);

page('/', homePage)
page('/catalog', catalogPage)
page('/login', loginPage);
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)

updateUserNav();
page.start();

