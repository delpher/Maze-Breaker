ui.game.Hud = function(getState) {
    ui.Visual.call(this, getState, $('<pre></pre>'));

    this.visual.css('font-size', '1.2rem');
    this.visual.css('line-height', '1.2rem');
    this.visual.css('padding', '1rem');
    this.visual.css('position', 'relative');
    this.visual.css('margin', '1rem');
    this.visual.css('z-index', 9999);
    this.visual.css('float', 'right');
    this.visual.css('height', '14rem');
    this.visual.css('width', '14rem');
    this.visual.css('background-color', 'rgba(255, 255, 255, 0.5)');

    this.onRender = function(state) {
        this.visual.text(state.lines.join('\r\n'));
    }
};