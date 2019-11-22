app.StartScreen = function (state, events) {
    return {
        buttons: buttons(state.buttons, events)
    };

    function buttons(state, events) {
        return {
            start: start(state.start, events),
            stop: stop(state.stop, events)
        }
    }

    function start(state, events) {
        return {
            title: start_title(state.title, events),
            visible: state.visible
        }
    }

    function start_title(title, events) {
        return events.includes('game.pause')
                ? 'Resume Game'
                : events.includes('game.stop')
                    ? 'Start Game'
                    : title;
    }

    function stop(state, events) {
        return {
            title: state.title,
            visible: stop_visible(state.visible, events)
        }
    }

    function stop_visible(visible, events) {
        return events.includes('game.pause')
                ? true
                : events.includes('game.stop')
                    ? false
                    : visible;
    }
};