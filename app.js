import page from './node_modules/page/page.mjs';

import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';

import * as api from './api/data.js';

window.api = api;

page('/', homePage);
page('/dashboard', homePage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/register', registerPage);
page('/login', loginPage);

page.start();
