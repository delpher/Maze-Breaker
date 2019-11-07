app.Hero = function(state, events) {

    const directions = ['up', 'down', 'left', 'right'];
    const commands = ['move', 'stop'];

    const actions = getActions();
    const direction = getDirection() || state.direction;
    const moving = getCommand() ? getCommand() === 'hero.move' : state.moving;
    const sprite = nextSprite() || state.sprite;

    return { direction, moving, sprite };

    function getActions() {
        const exclude = [
            'hero.'+state.direction, 
            state.moving ? 'hero.move' : ['hero.stop', 'hero.timer']
        ].flat();

        return events
            .filter(event => event.startsWith('hero.'))
            .filter(event => !exclude.includes(event))
            .map(event => event.replace('hero.', ''));
    }

    function getCommand() {
        return actions.find(a => commands.includes(a));
    }

    function nextSprite() {
        return when(actions.includes('timer'), () => advanceSprite())
            || when(getDirection() || actions.includes('stop'), () => getFirstSprite());
    }

    function getDirection() {
        return actions.find(a => directions.includes(a));
    }

    function advanceSprite() {
        return state.sprite === 4 ? 1 : state.sprite + 1;
    }

    function getFirstSprite() {
        return direction === 'left' ? 3 : 2;
    }

    function when(condition, callback) {
        return condition ? callback() : false;
    }
}