ui.game.MazeCell = function(getState) {
    ui.Visual.call(this, getState, $('<div></div>'));

    this.visual.addClass('maze-cell');

    this.onRender = function(state) {
        this.visual.outerWidth(state.width);
        this.visual.outerHeight(state.height);
        ['left', 'top', 'right', 'bottom'].forEach(setBorder.call(this));
    }

    function setBorder(edge) {
        this.visual.css('border-' + edge, getBorder(edge, state));
    }

    function getBorder(edge, state) {
        return 'solid ' + state.borderWidth + 'px' +
            state.borders[edge] ? 'black' : 'none';
    }
}

ui.game.Maze = function() {
    ui.VisualGroup.call(this, []);
}