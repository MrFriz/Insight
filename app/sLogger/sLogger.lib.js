class SLogger {
    constructor() {
        this.events = {};
    }

    add(time, event) {
        this.events[time] = event;
    }
}

module.exports = SLogger;