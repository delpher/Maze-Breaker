ui.Timer = function(getState, eventCallback) {
    ui.EventSource.call(this, eventCallback);
    ui.Visual.call(this, getState);

    let _interval, _running, _event, _timer;

    this.onRender = function(state) {
        _event = state.event;

        whenStateChanged(state, () => {
            _interval = state.interval;
            _running = state.running;
            updateTimer.call(this);
        }, this);
    }

    function whenStateChanged(state, callback, thisArg) {
        if (state.interval !== _interval || state.running !== _running)
            callback.call(thisArg);
    }

    function updateTimer() {
        window.clearInterval(_timer);
        if (_running)
        _timer = window.setInterval(raiseEvent.bind(this), _interval);
    }

    function raiseEvent() {
        this.raise(_event);
    }
}