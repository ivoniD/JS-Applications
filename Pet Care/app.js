console.log('Helloooo :)')

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

// import { welcomePage } from "./welcome.js";
// import { myBooksPage } from "./mybooks.js";


 let root = document.getElementById('content');

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav;
    next();
}

export function updateUserNav(){
    let userData = getUserData();
    if(userData){
        document.getElementById('create').style.display = 'inline'
        document.getElementById('logoutBtn').style.display = 'inline'
        document.getElementById('login').style.display = 'none'
        document.getElementById('register').style.display = 'none'
       // document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    }else{
        document.getElementById('create').style.display = 'none'
        document.getElementById('logoutBtn').style.display = 'none'
        document.getElementById('login').style.display = 'inline'
        document.getElementById('register').style.display = 'inline'
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
page('/catalog', catalogPage)
page('/login', loginPage);
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)

//page('/myPosts', myBooksPage)
// page('/', welcomePage)

updateUserNav();
page.start();

