var eventManager = new EventManager();

function EventManager() {
    //api
    var service = {
        publish: publish,
        subscribe: subscribe,
        unSubscribe: unSubscribe,
        queue: {}
    };


    /////////////////


    function publish(event, data) {
        var queue = service.queue[event];

        if(typeof queue === 'undefined') {
            return false;
        }

        queue.forEach(evt => {
            evt(data);
        });

        return true;
    }

    function subscribe(event, callback) {
        if (typeof service.queue[event] === 'undefined') {
            service.queue[event] = [];
        }

        service.queue[event].push(callback);
    }

    function unSubscribe(event, callback) {
        var queue = service.queue[event];

        if (typeof queue === 'undefined') {
            return false;
        }

        service.queue[event].splice(queue.indexOf(callback), 1);

        return true;
    }

    return service;
}

export {eventManager};
