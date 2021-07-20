const USER = 'USER';

export function getUser() {
    const getUserString = localStorage.getItem(USER);
    return JSON.parse(getUserString);
}

export function setUser(userObject) {
    const setUserString = JSON.stringify(userObject);
    localStorage.setItem(USER, setUserString);
}