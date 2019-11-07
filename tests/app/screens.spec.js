describe('Screens', () => {

    beforeEach(() => {
        spyOn(app, "StartScreen").and.callFake(s => s);
        spyOn(app, "GameScreen").and.callFake(s => s);
    })

    it('should update game screen', () => {
        const newGameState = {};
        const state = createState();
        const events = [];

        app.GameScreen = jasmine.createSpy()
            .withArgs(state.game, events)
            .and.returnValue(newGameState);

        const newState = runScreens(state, events);

        expect(newState.game).toBe(newGameState);
    });

    it('should update start screen', () => {
        const newStartState = {};
        const state = createState();
        const events = [];

        app.StartScreen = jasmine.createSpy()
            .withArgs(state.start, events)
            .and.returnValue(newStartState);

        const newState = runScreens(state, events);

        expect(newState.start).toBe(newStartState);
    });

    it('should start with start screen', () => {
        const state = createState({
            current: 'start'
        });

        const newState = runScreens(state);

        expect(newState.current).toBe('start');
    });

    it('should switch to game screen when game starts', () => {
        const state = createState({
            current: 'start'
        });

        const newState = runScreens(state, ['game.start']);

        expect(newState.current).toBe('game');
    });

    it('should remain on game screen while game running', () => {
        const state = createState({
            current: 'game'
        });

        const newState = runScreens(state, []);

        expect(newState.current).toBe('game')
    });

    it('should return to start screen when game paused', () => {
        const state = createState({
            current: 'game'
        });

        const newState = runScreens(state, ['game.pause']);

        expect(newState.current).toBe('start');
    });

    function createState(sample) {
        return Object.assign({
            current: '',
            start: {},
            game: {}
        }, sample);
    }

    function runScreens(state, events) {
        return app.Screens(state || {}, events || []);
    }

});