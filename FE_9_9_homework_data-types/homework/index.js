function findType(arg) {
    return typeof arg;
}

function forEach(arr, callback) {
    for (let el of arr) {
        callback(el);
    }
}

function map(arr, callback) {
    let modifiedArr = [];
    forEach(arr, function (el) {
        modifiedArr.push(callback(el));
    });
    return modifiedArr;
}

function filter(arr, callback) {
    let modifiedArr = [];
    forEach(arr, function (el) {
        if (callback(el)) {
            modifiedArr.push(el);
        }
    });
    return modifiedArr;
}

function getAdultAppleLovers(data) {
   return map(filter(data, function(el) {
        return el.age > 18 && el.favoriteFruit === 'apple';
    }),
        function (el) {
            return el.name
        });
}

function keys(obj) {
    let arrKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrKeys.push(key);
        }
    }
    return arrKeys;
}

function values(obj) {
    let arrValues = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrValues.push(obj[key]);
        }
    }
    return arrValues;
}

function showFormattedDate(date) {
    let months = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];
    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()} `;
}
