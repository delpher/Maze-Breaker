ui.Visual = function(getState, element) {
    this.visual = element;

    this.render = function(state) {
        if (typeof this.onRender === 'function')
            this.onRender(getState(state));
    }
}