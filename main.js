$(function () {

    let state = {
        hud: {
            lines: []
        },
        screens: {
            current: 'start',
            start: {
                buttons: {
                    start: { title: 'Start Game', visible: true },
                    stop: { title: 'End game', visible: false }
                }
            },
            game: {
                hero: {
                    direction: 'down',
                    sprite: 2,
                    moving: true
                },
                timer: {
                    interval: 150,
                    running: false,
                    event: 'hero.timer'
                }
            }
        }
    };

    const gui = new ui.Application(state, update);

    function update(events) {
        gui.render(state = app.Application(state, events));
    }
});