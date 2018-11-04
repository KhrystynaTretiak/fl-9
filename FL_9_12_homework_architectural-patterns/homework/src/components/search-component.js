export const searchDiv = document.createElement('div');
import {searchUser} from '../actions/search';
searchDiv.setAttribute('class', 'search-div');

export const search = document.createElement('input');
search.type = 'test';
search.setAttribute('id', 'search');
search.addEventListener('keyup', searchUser);


const text = document.createTextNode('Search by name:');
searchDiv.appendChild(text);
searchDiv.appendChild(search);