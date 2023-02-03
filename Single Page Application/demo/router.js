import {renderHome} from './home.js';
import {renderLogin} from './login.js';
import {renderLogout} from './logout.js';
import {render404} from './404.js'
import {renderRegister} from './register.js'
import {renderCreate} from './create.js'

const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/logout': renderLogout,
    '/create': renderCreate,
}


export function router(path) {
    hideContent();

    const renderer = routes[path] || render404;
    renderer();
    
}

function hideContent(){
    //hide all sections
    const mainContent = document.querySelector('.main-content');
    //NODELIST => for of ->
    for(const section of mainContent.children){
        section.style.display = 'none';
    }
}