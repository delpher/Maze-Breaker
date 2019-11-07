describe('Timer', () => {

    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it('shold start stopped', () => {
        const t = new TimerHelper({running: false});
        jasmine.clock().tick(2000);
        expect(t.eventCallback).not.toHaveBeenCalled();
    })

    it('should raise event on interval when running', () => {
        const t = new TimerHelper();

        jasmine.clock().tick(2000);

        expect(t.eventCallback).toHaveBeenCalledTimes(2);
        expect(t.eventCallback).toHaveBeenCalledWith(['timer']);
    });

    it('should not raise duplicated events', () => {
        const t = new TimerHelper();
        
        t.render();
        t.render();

        jasmine.clock().tick(2000);

        expect(t.eventCallback).toHaveBeenCalledTimes(2);
    });

    it('should raise different events', () => {
        const t = new TimerHelper();

        t.render({event: 'timer.one'});

        jasmine.clock().tick(1000);

        t.render({event: 'timer.two'});

        jasmine.clock().tick(1000);

        expect(t.eventCallback).toHaveBeenCalledTimes(2);
        expect(t.eventCallback).toHaveBeenCalledWith(['timer.one']);
        expect(t.eventCallback).toHaveBeenCalledWith(['timer.two']);
    });

    it('shold change interval', () => {
        const t = new TimerHelper();

        jasmine.clock().tick(1000);

        t.render({interval: 500});

        jasmine.clock().tick(1000);

        expect(t.eventCallback).toHaveBeenCalledTimes(3);
    });

    it('should stop', () => {
        const t = new TimerHelper();

        jasmine.clock().tick(1000);

        t.render({running: false});

        jasmine.clock().tick(1000);

        expect(t.eventCallback).toHaveBeenCalledTimes(1);
    });

    it('should resume', () => {
        const t = new TimerHelper();

        jasmine.clock().tick(1000);

        t.render({running: false});

        jasmine.clock().tick(1000);
        jasmine.clock().tick(1000);
        jasmine.clock().tick(1000);

        t.render({running: true});

        jasmine.clock().tick(1000);

        expect(t.eventCallback).toHaveBeenCalledTimes(2);
    })

    function TimerHelper(state) {
        let _state = Object.assign({},
        {
            interval: 1000,
            event: 'timer',
            running: true
        }, state);

        this.eventCallback = jasmine.createSpy('timer.eventCallback');

        const timer = new ui.Timer(s=>s, this.eventCallback);

        timer.render(_state);

        this.render = function(state) {
            _state = Object.assign(_state, state);
            timer.render(_state);
        }
    }

});