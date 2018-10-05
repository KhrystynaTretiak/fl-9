function assign(target) {
    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert to object');
    }
    let obj = Object(target);
    for (let i = 1; i < arguments.length; i++) {
        let newObj = arguments[i];
        if (newObj !== null) {
            for (let key in newObj) {
                if (newObj.hasOwnProperty(key)) {
                    obj[key] = newObj[key];
                }
            }
        }
    }

    return obj;
}


function Bot(config) {
    this.name = config.name;
    this.speed = config.speed;
    this.x = config.x;
    this.y = config.y;
    this._defaultSpeed = config.speed;
}
Bot.prototype.getSpeed = function () {

    return this.speed;
}
Bot.prototype.setSpeed = function (newSpeed) {
    this.speed = newSpeed;
}
Bot.prototype.getDefaultSpeed = function () {

    return this._defaultSpeed;
}
Bot.prototype.getCoordinates = function () {

    return { x: this.x, y: this.y };
}
Bot.prototype.setCoordinates = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}
Bot.prototype.move = function (moving) {
    if (moving === 'up') {
        this.y += this.speed;
    } else if (moving === 'down') {
        this.y -= this.speed;
    } else if (moving === 'left') {
        this.x -= this.speed;
    } else if (moving === 'right') {
        this.x += this.speed;
    } else {
        console.log('Error. Possible directions up, down, left, right');
    }
}
Bot.prototype.showPosition = function () {
    console.log(`I am ${this.constructor.name} ${this.name}. I am located at ${this.x} : ${this.y}`);
}


function Racebot(config) {
    Bot.call(this, config);
    this._prevMov = null;
}
Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;
Racebot.prototype.move = function (moving) {
    if (this._prevMov === moving) {
        ++this.speed
    } else {
        this.speed = this.getDefaultSpeed();
    }
    Bot.prototype.move.call(this, moving);
    this._prevMov = moving;
}


function Speedbot(config) {
    Bot.call(this, config);
    this._isPrepareEngine = false;
}
Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;
Speedbot.prototype.prepareEngine = function () {
    this.setSpeed(this.getSpeed() + 2);
    this._isPrepareEngine = true;
}
Speedbot.prototype.move = function (moving) {
    Bot.prototype.move.call(this, moving);
    if (this._isPrepareEngine) {
        if (this.getSpeed() > this.getDefaultSpeed()) {
            this.setSpeed(this.getSpeed() - 1);
        }
    }
}
