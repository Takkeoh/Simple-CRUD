import fetch from "node-fetch";

// Supported HTTP Verbs

// TODO: Properly enable people to add more verbs w/ precision if a body is expected or not.
let verbs = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
]

// Requests options
function generateOptionRequest(httpVerb, body) {
    if (verbs.includes(httpVerb)) {
        if (httpVerb == "GET" || httpVerb == "DELETE") {
            if (body != null) {
                throw new Error(httpVerb + " requests should not have a body. Aborting request.");
            }
            return {
                method: httpVerb,
            }
        }
        else {
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
    }
    throw new Error("Unsupported type of request.");
}

// Properly fetch data

// /!\ Returns a Promise /!\

function getData(url, method, body=undefined) {
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

export default getData;