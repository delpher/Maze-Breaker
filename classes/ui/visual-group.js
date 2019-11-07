ui.VisualGroup = function(children, getState , element) {
    ui.Visual.call(this, getState, element || $('<div></div>'));

    children.forEach(child => this.visual.append(child.visual));

    this.onRender = function(state) {
        children.forEach(child => child.render(state));
    };

    this.add = function(child, state) {
        children.push(child);
        this.visual.append(child.visual);
        child.render(state);
    };

    this.remove = function(child) {
        const removed = children.splice(children.indexOf(child), 1)[0];
        removed && removed.visual.remove();
    }


}