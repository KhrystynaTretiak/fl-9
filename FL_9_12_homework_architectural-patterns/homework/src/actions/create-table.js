import data from '../data';
import {Users} from '../components/users-table';
export const tab = document.createElement('table');

export let start = 0;
export let end = 5;


export function createHeaderTable() {
    const headTable = `<tr class="head-table">
    <td>Photo</td>
    <td>Name</td>
    <td>Address</td>
    <td>Email</td>
    <td>Phone</td>
    <td>Timezone</td>
    <td>Actions</td>
    </tr>`;
    tab.innerHTML += headTable;
}

export function createTable(from, to) {
    if (from > data.length) {
        to = data.length;
        start = data.length;
        end = data.length;
    } else {
        start += 5;
        end += 5;
    }
    for (let i = from; i < to; i++) {
        const user = new Users(data[i].id, data[i].picture, data[i].name, data[i].location, data[i].email,
            data[i].phone, data[i].timezone);
        tab.appendChild(user.createRow());
    }
}
export const tableDiv = document.createElement('div');
tableDiv.setAttribute('class', 'table-div');
tableDiv.appendChild(tab);
