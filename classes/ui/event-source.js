ui.EventSource = function(eventCallback) {
    this.raise = function(event) {
        eventCallback([event]);
    }
}