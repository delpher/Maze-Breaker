describe('StartScreen', () => {
    it('should show resume game', () => {
        const state = {
            buttons: {
                start: { title: 'Start Game'},
                stop: { title: 'End game', visible: false }
            }
        };

        const newState = app.StartScreen(state, []);
    })
})