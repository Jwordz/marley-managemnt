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

// Accordion Functionality
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});