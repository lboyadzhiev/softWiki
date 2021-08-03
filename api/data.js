import * as api from './api.js';

const host = 'https://parseapi.back4app.com';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function createArticle(article) {
    const userId = sessionStorage.getItem('userId');
    const body = Object.assign({}, article, {
        owner: {
            __type: 'Pointer',
            className: '_User',
            objectId: userId,
        },
    });

    return await api.post(host + '/classes/Article', body);
}

export async function getArticle() {
    return await api.get(host + '/classes/Article');
}

export async function getArticleById(id) {
    return await api.get(host + '/classes/Article/' + id);
}

export async function updateArticle(id, article) {
    return await api.put(host + '/classes/Article' + id, article);
}

export async function deleteArticle(id) {
    return await api.del(host + '/classes/Article' + id);
}
