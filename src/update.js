import sendRequest from './requestHandler.js'

async function updateDbPatch(url, body) {
    let response = "Not yet requested";
    await sendRequest(url, "PATCH", body)
        .then(data => response = data)
    return response;
}

async function updateDbPut(url, body) {
    let response = "Not yet requested";
    await sendRequest(url, "PUT", body)
        .then(data => response = data)
    return response;
}

export { updateDbPatch, updateDbPut };