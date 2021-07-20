import { makeUser } from './make-user.js';
import { setUser } from '../data/storage-utils.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(userForm);
    const newUser = makeUser(formData);
    setUser(newUser);

    window.location.replace('./map');
});