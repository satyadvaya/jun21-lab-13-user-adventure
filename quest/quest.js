import quests from '../data/quest-data.js';
import findById from '../data/find-by-id.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const questChoices = document.getElementById('quest-choices');

const quest = findById(quests, searchParams.get('questId'));

questTitle.textContent = quest.title;
questImage.src = `../assets/media/${quest.image}`;
questDescription.textContent = quest.description;

for (let choice of quest.choices) {
    const label = document.createElement('label');
    
    const radio = document.createElement('input');
    radio.name = 'choice';
    radio.type = 'radio';
    radio.value = choice.id;
    
    const span = document.createElement('span');
    span.textContent = choice.description;
    
    label.append(radio, span);
    
    questChoices.append(label);
}