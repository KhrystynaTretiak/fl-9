import data from '../data';
import {search} from '../components/search-component';
import {Users} from '../components/users-table';
import {tab} from './create-table';
export function searchUser() {
    for (let i = 0; i < data.length; i++) {
        if ((data[i].name[0].toLowerCase()) === search.value) {
            const user = new Users(data[i].id, data[i].picture, data[i].name, data[i].location, data[i].email,
                data[i].phone, data[i].timezone);
            tab.removeChild(tab.firstChild);
            tab.appendChild(user.createRow());
        }
    }
}
