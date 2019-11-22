describe('GameScreen', () => {

    beforeEach(() => {
        spyOn(app, 'Timer');
        spyOn(app, 'Hero');
    });

    it('should update hero', () => {
        const newHeroState = {};
        const state = { hero: {} };
        app.Hero.and.returnValue(newHeroState);

        const newState = app.GameScreen(state);

        expect(newState.hero).toBe(newHeroState);
    });

    it('should update timer', () => {
        const newTimerState = {};
        const state = { timer: {} };
        app.Timer.and.returnValue(newTimerState);

        const newState = app.GameScreen(state);

        expect(newState.timer).toBe(newTimerState);

    })
});