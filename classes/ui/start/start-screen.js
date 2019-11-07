ui.start.StartScreen = function(eventCallback) {

    ui.VisualGroup.call(this, [
        new ui.start.GameTitle('Maze BREAKER'),
        new ui.start.GameButton('game.start', s => s.buttons.start, eventCallback),
        new ui.start.GameButton('game.stop', s => s.buttons.stop, eventCallback)
    ], 
    s => getState(s));

    this.visual.addClass('start-screen');

    const _baseOnRender = this.onRender;
    this.onRender = function(state) {
        _baseOnRender(state);
        this.visual.toggle(state.visible);
    }

    function getState(state) {
        return Object.assign({}, state.screens.start, { visible: state.screens.current === 'start' });
    }
}