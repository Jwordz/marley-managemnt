const maleActorsContainer = document.querySelector('#male-actors .actor-grid');
const femaleActorsContainer = document.querySelector('#female-actors .actor-grid');
const maleActors = [
    'male/actor1.jpg',
    'male/actor2.jpg',
    'male/actor3.jpg',
    // Add more male actors here
];
const femaleActors = [
    'female/actor1.jpg',
    'female/actor2.jpg',
    'female/actor3.jpg',
    // Add more female actors here
];

function createActorElement(imageSrc) {
    const actor = document.createElement('div');
    actor.classList.add('actor');
    const image = document.createElement('img');
    image.src = `img/actors/${imageSrc}`;
    actor.appendChild(image);
    return actor;
}

function populateActorGrid(container, actors) {
    actors.forEach(actor => {
        const actorElement = createActorElement(actor);
        container.appendChild(actorElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateActorGrid(maleActorsContainer, maleActors);
    populateActorGrid(femaleActorsContainer, femaleActors);
});

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle('active');
    const accordionContent = accordionItem.querySelector('.accordion-content');
    if (accordionItem.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
