export const countLoadDiv = document.createElement('div');
export const currentElementsClass = 'current-elements';
export const allElementsClass = 'all-elements';

countLoadDiv.setAttribute('class', 'count-div');

const countLoad = `<p> Displayed  <span class="${currentElementsClass}"></span>
    users out of <span class="${allElementsClass}"></span> </p>
    <button id = "loadButton"> Load More </button>`;

countLoadDiv.innerHTML += countLoad;


