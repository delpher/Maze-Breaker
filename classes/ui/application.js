ui.Application = function(initialState, eventCallback) {
    ui.VisualGroup.call(this, [
            new ui.game.Hud(s => s.hud),
            new ui.start.StartScreen(eventCallback),
            new ui.game.GameScreen(eventCallback)
        ],
        s => s,
        $('body'));

    this.render(initialState);
}