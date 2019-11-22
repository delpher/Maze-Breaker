describe('Hero', () => {
    describe('when direction changes', () => {

        testTurn('left', 3);
        testTurn('right', 2);
        testTurn('up', 2);
        testTurn('down', 2);

        function testTurn(direction, sprite) {
            it('should turn ' + direction, () => {
                assertTurns('hero.' + direction, direction, sprite);
            });
        }

        function assertTurns(event, expectedDirection, expectedSprite) {
            const state = makeHeroState();
            const events = [event];
            const newState = app.Hero(state, events);
            expect(newState.direction).toBe(expectedDirection);
            expect(newState.sprite).toBe(expectedSprite);
        }
    });

    it('should start moving', () => {
        const state = makeHeroState();
        const newState = app.Hero(state, ['hero.move']);
        expect(newState.moving).toBe(true);
    });

    describe('when moving', () => {
        testMoves('left', 3);
        testMoves('up', 2);
        testMoves('down', 2);
        testMoves('right', 2);

        function testMoves(direction, initialSprite) {
            it('should move ' + direction, () => {
                let state = makeHeroState({moving: true, direction: direction, sprite: 1});
                expect(state.sprite).toBe(1);

                state = app.Hero(state, ['hero.timer']);
                expect(state.sprite).toBe(2);

                state = app.Hero(state, ['hero.timer']);
                expect(state.sprite).toBe(3);

                state = app.Hero(state, ['hero.timer']);
                expect(state.sprite).toBe(4);

                state = app.Hero(state, ['hero.timer']);
                expect(state.sprite).toBe(1);
            });
        }
    });

    describe('should stop at the right frame', () => {
        testStopsAt('left', 3);
        testStopsAt('right', 2);
        testStopsAt('up', 2);
        testStopsAt('down', 2);

        function testStopsAt(direction, sprite) {
            it('when moving ' + direction, () => {
                assertStopsAtFrame(direction, sprite);
                assertStopsAtFrame('left', 3);
                assertStopsAtFrame('right', 2);
                assertStopsAtFrame('up', 2);
            });
        }

        function assertStopsAtFrame(direction, sprite) {
            const state = makeHeroState({moving: true, direction: direction});
            let newState = app.Hero(state, ['hero.timer']);
            newState = app.Hero(newState, ['hero.stop']);
            expect(newState.sprite).toBe(sprite);
        }
    });

    function makeHeroState(sample) {
        return Object.assign({
            direction: 'down',
            sprite: 2,
            moving: true
        }, sample)
    }
});