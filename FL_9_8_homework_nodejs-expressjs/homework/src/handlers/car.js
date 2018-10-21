'use strict';

const fs = require('fs');
const FILENAME = 'db/data.json';

function getCarsStorage() {
    return JSON.parse(fs.readFileSync(FILENAME, 'utf8'));
}

exports.getById = (id) => {
    return getCarsStorage().find((el) => el.id === id);
};

exports.getAll = () => {
    return getCarsStorage();
};

exports.new = (carJson) => {
    const cars = getCarsStorage();
    const carsId = getCarsStorage().find((el) => el.id === carJson.id)
    if (carsId) {
        return;
    }
    const newCar = {
        'id': carJson.id,
        'brand': carJson['brand'],
        'model': carJson['model'],
        'engineVolume': carJson['engineVolume'],
        'year': carJson['year']
    }
    cars.push(newCar);

    fs.writeFileSync(FILENAME, JSON.stringify(cars));
    return newCar;
};

exports.update = (carId, carJson) => {
    const cars = getCarsStorage();
    const ind = cars.findIndex((el) => el.id === carId);

    if (ind >= 0) {
        cars[ind].brand = carJson.brand;
        cars[ind].model = carJson.model;
        cars[ind].engineVolume = carJson.engineVolume;
        cars[ind].year = carJson.year;

        fs.writeFileSync(FILENAME, JSON.stringify(cars));
        return cars[ind];
    }

};

exports.delete = (carId) => {
    const cars = getCarsStorage();
    const ind = cars.findIndex((el) => el.id === carId);
    if (ind >= 0) {
        cars.splice(ind, 1);
        fs.writeFileSync(FILENAME, JSON.stringify(cars));
        return 'The car has been successfully removed';
    }
};