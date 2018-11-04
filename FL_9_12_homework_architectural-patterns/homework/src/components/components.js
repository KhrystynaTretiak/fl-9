import {searchDiv} from './search-component';
import {countLoadDiv, currentElementsClass, allElementsClass} from './count-load-component';
import {createTable} from '../actions/create-table';
import {createHeaderTable} from '../actions/create-table';
import {tableDiv} from '../actions/create-table';
import {start, end} from '../actions/create-table';
import data from '../data';
const root = document.getElementById('root');

export function createNode() {
    root.appendChild(searchDiv);
    root.appendChild(tableDiv);
    root.appendChild(countLoadDiv);
    const currentElement = document.querySelector(`.${currentElementsClass}`);
    document.querySelector(`.${allElementsClass}`).textContent = data.length;
    currentElement.textContent = end - start;
    createHeaderTable();
    createTable(start, end);
    const loadButton = document.getElementById('loadButton');
    loadButton.addEventListener('click', () =>{
        createTable(start, end);
        currentElement.textContent = start;
    });
}

