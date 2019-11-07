app.GameScreen = function (state, events) {
    return {
        hero: app.Hero(state.hero, events),
        timer: app.Timer(state.timer, events)
    }
}