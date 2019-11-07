describe('EventSource', () => {
    it('should raise event', () => {
        const callback = jasmine.createSpy('event-callback');
        const source = new ui.EventSource(callback);

        source.raise('some.event');

        expect(callback).toHaveBeenCalledWith(['some.event']);
    });
});