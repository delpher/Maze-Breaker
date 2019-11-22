describe('Hero', () => {
    it('should move left', () => {
        const state = makeHeroState();

        const newState = app.Hero(state, ['hero.left']);

        expect(newState.direction).toBe('left');
    });

    function makeHeroState(sample) {
        return Object.assign({}, {
            direction: 'down',
            sprite: 2,
            moving: true
        }, sample);
    }
});