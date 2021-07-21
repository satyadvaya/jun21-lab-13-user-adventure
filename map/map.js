import quests from '../data/quest-data.js';
import { getUser } from '../data/storage-utils.js';
import { allQuestsComplete } from './all-quests-complete.js';

const user = getUser();

if (user.hp <= 0 || allQuestsComplete(user)) {
    window.location.replace('../results');
}

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    if (user.completed[quest.id]) {
        createQuestSpan(quest);
    } else {
        createQuestLink(quest);
    }
}

function createQuestSpan(quest) {
    const span = document.createElement('span');
    span.innerText = `You Have Completed the ${quest.title} Quest!`;
    questList.appendChild(span);
}

function createQuestLink(quest){
    const questAnchor = `../quest/?questId=${quest.id}`;
    const questLink = document.createElement('a');

    questLink.href = questAnchor;
    questLink.textContent = quest.title;

    questList.appendChild(questLink);
}