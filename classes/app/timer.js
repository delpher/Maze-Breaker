app.Timer = function (state, events) {
    return {
        interval: state.interval,
        event: state.event,
        running: running(state.running, events)
    }

    function running(state, events) {
        return events.includes('game.stop') || events.includes('game.pause')
            ? false
            : events.includes('game.start')
                ? true
                : state;
    }
}