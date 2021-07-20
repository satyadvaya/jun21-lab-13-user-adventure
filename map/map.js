import quests from '../data/quest-data.js';

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    const questAnchor = `../quest/?questId=${quest.id}`;
    const questLink = document.createElement('a');

    questLink.href = questAnchor;
    questLink.textContent = quest.title;

    questList.appendChild(questLink);
}