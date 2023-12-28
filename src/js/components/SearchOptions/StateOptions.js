export default function StateOptions(elementEvent, elementToggle) {
    elementEvent.addEventListener('click', (event) => {
        elementToggle.classList.toggle('Hidden');
        elementToggle.children[0].children[0].focus();

        elementEvent.children[1].classList.toggle('Rotate');
    });
}
