ui.game.HeroSprite = function(getState) {
    ui.Visual.call(this, getState, $('<div></div>'));
    
    this.onRender = function(state) {
        this.visual.removeClass();
        this.visual.addClass("hero");
        this.visual.addClass(getSpriteClass(state));
    }
    
    function getSpriteClass(state) {
        return state.direction + '-' + state.sprite;
    }
}