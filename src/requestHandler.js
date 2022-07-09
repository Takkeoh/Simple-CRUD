import fetch from "node-fetch";

// Small class to handle new supported verbs.
class httpMode {
    constructor(verb, hasBody = false) {
        this.verb = verb;
        this.hasBody = hasBody;
    }
}

// List of supported HTTP Verbs
let validModes = [
    new httpMode("GET"),
    new httpMode("POST", true),
    new httpMode("PUT", true),
    new httpMode("PATCH", true),
    new httpMode("DELETE"),
]

// Requests options
function generateOptionRequest(httpVerb, body) {
    let mode = validModes.find(mode => mode.verb === httpVerb);
    if (!mode) {
        throw new Error("Unsupported type of request.");
    }

    if (mode.hasBody) {
        if (body == null) {
            throw new Error(httpVerb + " requests should have a body. Aborting request.");
        }
        return {
            method: httpVerb,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    }
    else {
        if (body != null) {
            throw new Error(httpVerb + " requests should not have a body. Aborting request.");
        }

        return {
            method: httpVerb,
        }
    }

}

// Properly fetch data

// /!\ Returns a Promise /!\

function sendRequest(url, method, body=undefined) {
    return new Promise((resolve, reject) => {
        fetch(url, generateOptionRequest(method, body))
            .then(response => {
                return response.json();
            })
            .then(data_from_fetched => {
                let data = data_from_fetched;
                resolve(data);
            })
        }
    )    
}

export default sendRequest;