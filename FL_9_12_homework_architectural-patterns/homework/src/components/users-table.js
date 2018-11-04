export class Users {
    constructor(id, photo, name, location, email, phone, timezone) {
        this.photo = photo;
        this.name = name;
        this.location = location;
        this.email = email;
        this.phone = phone;
        this.timezone = timezone;
        this.id = id;
    }

    createRow() {
        const row = document.createElement('tr');
        row.setAttribute('id', this.id);
        const rowContent = `<td><img src = "${this.photo}"></td>
        <td>${this.name}</td>
        <td>${this.location}</td>
        <td>${this.email}</td>
        <td>${this.phone}</td>
        <td>${this.timezone}</td>
        <td><button class="removeButton">Remove</button></td>`;
        row.innerHTML = rowContent;
        row.addEventListener('click', (event) => {
            if (event.target.className === 'removeButton') {
                row.remove();
            }
        });
        return row;
    }
}
