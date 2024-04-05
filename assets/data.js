class Questions {

    constructor() {
        this.url = "https://opentdb.com/api.php?amount=50&category=9"
    }

    getData() {

        return fetch(this.url)
                .then(response=>response.json())
                .then(data => data.results)
        
    }
    // getData() {
    //     return fetch(this.url)
    //         .then(response => response.json())
    //         .then(data => data.results)
    //         .catch(error => console.error('Error:', error));
    // }
}