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

/* Generate requests options 
    Input :
        - httpVerb : string
        - body : JSON Object
    Output :
        RequestInfo object that matches the type of request
    Errors:
        - Unknown request
        - Body on request that forbids bodies (e.g GET requests)
        - Missing body on requests that ask for one (e.g POST requests)
*/
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

/* Send the request to server and fetches the response.
    Input :
        - url : string
        - method : string
        - body : JSON Object, undefined by default
    Output :
        /!\ Returns a Promise /!\
        Returns the response of the server as a JSON Object
*/
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