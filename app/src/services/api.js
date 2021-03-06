export default {
    getRacers() {
        return fetch('/api/racers')
            .then(response => response.json());

    },
    addRacer(racer) {
        return fetch('/api/racers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(racer)

        })
            .then(response => response.json());
    }

};