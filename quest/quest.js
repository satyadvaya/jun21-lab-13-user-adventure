import quests from '../data/quest-data.js';
import findById from '../data/find-by-id.js';
import { getUser, setUser } from '../data/storage-utils.js';

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

const choiceFormDOM = document.getElementById('choice-form');

choiceFormDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    const choiceForm = new FormData(choiceFormDOM);
    
    const choiceValue = choiceForm.get('choice');
    const choiceData = findById(quest.choices, choiceValue);

    const user = getUser();
    user.gold += choiceData.gold;
    user.hp += choiceData.hp;
    user.completed[quest.id] = true;
    setUser(user);

    const returnToMapLink = document.getElementById('return-to-map-link');
    questDescription.textContent = choiceData.result;
    choiceFormDOM.classList.add('hidden');
    returnToMapLink.classList.remove('hidden');
});