class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === undefined || callback === undefined || time === null || callback === null) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.find(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time) {
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (time === this.alarmCollection[i].time) {
                this.alarmCollection.splice(i, 1);
                i--;
            }
        }
    }

    getCurrentFormattedTime() {
        const now = new Date();
        return now.toTimeString().slice(0, 5);
    }

    start() {
    if (this.intervalId !== null) {
        return;
    }

    this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach((alarm) => {
            if (alarm.time === currentTime && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
        this.intervalId = null;
    }
}