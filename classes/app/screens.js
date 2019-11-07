app.Screens = function(state, events) {
    return {
        current: current(state.current, events),
        start: app.StartScreen(state.start, events),
        game: app.GameScreen(state.game, events)
    };

    function current(current, events) {
        if (current === 'start' && events.includes('game.start'))
            return 'game';
        if (current === 'game' && events.includes('game.pause'))
            return 'start';
        return current;
    }
}