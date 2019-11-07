ui.start.GameTitle = function(text) {
    ui.Visual.call(this, null, $('<h1></h1>'));

    this.visual.text(text);
    this.visual.addClass('game-title');
}