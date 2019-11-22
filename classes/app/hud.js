app.Hud = function(state, events) {
    return {
        lines: lines(state.lines, events)
    }

    function lines(lines, events) {
        return [
            lines,
            formatEvents(events)
        ].flat().splice(-10, 10);
    }

    function formatEvents(events) {
        return events.map(event => Date.now() + ': ' + event)
    }
};