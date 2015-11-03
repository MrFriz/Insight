module.exports = class SLogger {
    constructor() {
        this.events = {};
    }

    add(time, event) {
        this.events[time] = event;
    }

    list() {
        return require('angular').copy(this.events);
    }
};