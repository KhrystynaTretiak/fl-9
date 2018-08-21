let login = prompt('Enter your login');

if (login === null || login === '') {
    alert('Canceled.');
} else if (login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols')
} else if (login === 'User') {
    checkPassword();
} else {
    alert('I don\'t know you')
}

function checkPassword() {
    let password = prompt('Enter your password');
    if (password === null || password === '') {
        alert('Canceled');
    } else if (password === 'SuperUser') {
        let time = new Date().getHours();
        if (time < 20) {
            alert('Good day!')
        } else {
            alert('Good evening!')
        }
    } else {
        alert('Wrong password');
    }
}

