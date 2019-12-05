import config from './config'

function getUser (nameUser) {
    const url = '/users/${nameUser}';
    return config.get(url);
}

function getRepos (nameUser) {
    const url=  `/users/${nameUser}/repos`;
    return config.get(url);
}

export { getRepos, getUser }