app.Application = function (state, events) {
    return {
        screens: app.Screens(state.screens, events),
        hud: app.Hud(state.hud, events)
    }
};