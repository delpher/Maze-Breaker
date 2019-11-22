ui.start.GameButton = function(event, getState, eventCallback) {
    ui.Visual.call(this, getState, $('<div><button></button></div>'));
    ui.EventSource.call(this, eventCallback);

    this.visual.find('button').click(click.bind(this));

    function click() { 
        this.raise(event);
    }

    this.onRender = function(state) {
        this.visual.find('button').text(state.title);
        this.visual.toggle(state.visible);
    }
};