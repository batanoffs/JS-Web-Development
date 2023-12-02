import page from './node_modules/page/page.mjs';
import {render} from './node_modules/lit-html/lit-html.js';
import { showRegisterView } from './src/views/register.js';
import { showLoginView } from './src/views/login.js';
import { userService } from './src/userService.js';

const root = document.querySelector('main');

page (declarationContext)
page('/', () => console.log('home'));
page('/browse', () => console.log('browse'));
page('/login', showLoginView);
page('/register', showRegisterView);
page('/my-Teams', () => console.log('My-Teams'));
page('/logout', logout);
page('/edit', () => console.log('edit'));
page('create', () => console.log('create'));


function logout() {
    userService.logout();
    //TODO redirect
}

function updateNav() {
    
}


page.start();

function renderer(template) {

    render(template, root)
}

function declarationContext(context, next) {
    context.render = renderer;




    next();
}

