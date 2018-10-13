const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const trackButton = document.getElementById('track');
const waterElement = document.getElementById('water');
const landElement = document.getElementById('land');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');

const http = {
    get: function (url) {

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = () => resolve(xhr);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }
}


function track() {
    showAnimation({loading: 'block'});
    const url = `https://api.onwater.io/api/v1/results/${latitude.value},${longitude.value}`;
    http.get(url).then((xhr) => {
        if (xhr.status === 404 || xhr.responseText === 'null') {
            showAnimation({error: `Error ${xhr.status}: ${xhr.statusText}` });
        } else {
            const responseObject = JSON.parse(xhr.responseText);
            responseObject.water ? showAnimation({water:'block'}) : showAnimation({land: 'block'});
        }
    }, (err) => {
        showAnimation({error: `Error ${err}` });
    })

}

function showAnimation({water = 'none', land = 'none', loading = 'none', error = ''}) {
    loadingElement.style.display = loading;
    waterElement.style.display = water;
    landElement.style.display = land;
    errorElement.textContent = error;
}

trackButton.addEventListener('click', track);


