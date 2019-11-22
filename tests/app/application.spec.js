describe('Application', function() {

    beforeEach(function() {
        spyOn(app, 'Hud');
    });

    it('should update screens', function() {
        const state = {
            screens: {}
        };
        const nextScreensState = {};
        const events = [];

        spyOn(app, 'Screens')
            .withArgs(state.screens, events)
            .and.returnValue(nextScreensState);

        const newState = runApplication(state, events);

        expect(newState.screens).toBe(nextScreensState);
    });

    function runApplication(state, events) {
        return app.Application(state || {}, events || []);
    }
});