specs.ui.RunVisualSpecs = function (BaseClass, done) {
     const worldState = {
            childState: {}
        };

        const expectedVisual = 'html-element';

        function TestVisual() {
            BaseClass.call(this, s => s.childState, expectedVisual);

            expect(this.visual).toBe(expectedVisual);

            this.onRender = function (state) {
                expect(state).toBe(worldState.childState);
                done();
            }
        }

        new TestVisual().render(worldState);
}