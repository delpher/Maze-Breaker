ui.game.GameScreen = function (eventCallback) {
    const self = this;
    let _visible = false;

    ui.VisualGroup.call(this, [
        new ui.game.HeroSprite(s => s.hero),
        new ui.Timer(s => s.timer, eventCallback)
    ],
    s => getState(s));

    ui.EventSource.call(this, eventCallback);

    this.visual.addClass('game-screen');
    $(window).on('keydown', onKeydown);

    const _baseOnRender = this.onRender;
    this.onRender = function (state) {
        _baseOnRender(state);
        _visible = state.visible;
        this.visual.toggle(state.visible);
    };

    function onKeydown(e) {
        if (!_visible) return;
        if (e.keyCode === 27) self.raise('game.pause');
        if (e.keyCode === 37) self.raise('hero.left');
        if (e.keyCode === 38) self.raise('hero.up');
        if (e.keyCode === 39) self.raise('hero.right');
        if (e.keyCode === 40) self.raise('hero.down');
    }

    function getState(state) {
        return Object.assign({}, state.screens.game, { visible: state.screens.current === 'game' })
    }
};