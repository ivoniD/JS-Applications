console.log('hello, its me :)')

import {html, render} from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./util.js";
import page from "./node_modules/page/page.mjs";
import { logout } from "./api.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { welcomePage } from "./welcome.js";
import { homePage } from "./home.js";
import { createPage } from "./create.js";
//import { myBooksPage } from "./mybooks.js";
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
        document.getElementById('user').style.display = 'inline'
        document.getElementById('guest').style.display = 'none'
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    }else{
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline'
    }
}

 document.getElementById('logoutBtn').addEventListener('click', (e) =>{
     e.preventDefault()
     logout()
     updateUserNav()
     page.redirect('/');
 })

page(decorateContext);

page('/catalog', homePage)
page('/', welcomePage)
page('/login', loginPage);
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)

//page('/myPosts', myBooksPage)

updateUserNav();
page.start();

