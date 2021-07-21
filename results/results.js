import { getUser } from '../data/storage-utils.js';

const user = getUser();

const beastImg = document.getElementById('beast');
beastImg.src = `../assets/media/${user.race}.png`;

const nameSpan = document.getElementById('name');
nameSpan.textContent = `User Name: ${user.name}`;

const raceSpan = document.getElementById('race');
raceSpan.textContent = `User Race: ${user.race}`;

const hpSpan = document.getElementById('hp');
hpSpan.textContent = `User HP: ${user.hp}`;

const goldSpan = document.getElementById('gold');
goldSpan.textContent = `User Gold: ${user.gold}`;

if (user.hp <= 0) {
    const deadSpan = document.getElementById('dead');
    deadSpan.textContent = `You died!  Stay dead or play again ...`;
} else {
    const aliveSpan = document.getElementById('alive');
    aliveSpan.textContent = `You escaped death!  Gloat in your vitality or play again ...`;
}