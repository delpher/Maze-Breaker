describe('VisualGroup', () => {

    it('should inherit visual', done => {
        specs.ui.RunVisualSpecs(function (state, getState, element) {
            ui.VisualGroup.call(this, [], state, getState, element);
        }, done);
    });

    it('should append child visuals', () => {
        const children = stubChildren('child-one', 'child-two');

        const group = makeGroup(children);

        expect(group.element.append).toHaveBeenCalledTimes(2);
        expect(group.element.append).toHaveBeenCalledWith(children[0].visual);
        expect(group.element.append).toHaveBeenCalledWith(children[1].visual);
    });

    it('should render child visuals', () => {
        const children = stubChildren('child-one', 'child-two');

        const worldState = {
            groupState: {}
        };

        const group = makeGroup(children, s => s.groupState);
        group.render(worldState);

        expect(children[0].render).toHaveBeenCalledWith(worldState.groupState);
        expect(children[1].render).toHaveBeenCalledWith(worldState.groupState);
    });

    it('should add child visuals', () => {
        const state = {};
        const child = stubVisual('child');

        const group = makeGroup();
        group.add(child, state);
        group.render(state);

        expect(group.element.append).toHaveBeenCalledWith(child.visual);
        expect(child.render).toHaveBeenCalledTimes(2);
        expect(child.render).toHaveBeenCalledWith(state);
    });

    it('should remove child visuals', () => {
        const children = stubChildren('child-one', 'child-two');
        const removed = children[0];
        const notRemoved = children[1];
        const group = makeGroup(children);

        group.remove(removed);
        group.render({});

        expect(children).toEqual([notRemoved]);
        expect(removed.render).not.toHaveBeenCalled();
        expect(removed.visual.remove).toHaveBeenCalled();
        expect(notRemoved.render).toHaveBeenCalled();
    });

    function makeGroup(children, getState, element) {
        return new TestGroup(children, getState, element);
    }

    function TestGroup(children, getState, element) {
        this.element = element || stubElement('element');

        ui.VisualGroup.call(this, 
            children || [], 
            getState || (s => s), 
            this.element);
    }

    function stubChildren() {
        return Array.prototype.slice.call(arguments).map(stubVisual);
    }

    function stubVisual(name) {
        return {
            render: jasmine.createSpy(name + '.render'),
            visual: stubElement(name)
        }
    }

    function stubElement(name) {
        return {
            append: jasmine.createSpy(name + '.element.append'),
            remove: jasmine.createSpy(name + '.element.remove')
        }
    }
});