import sendRequest from './requestHandler.js'

async function readFromDb(url) {
    let response = "Not yet requested";
    await sendRequest(url, "GET")
        .then(data => response = data)
    return response;
}

export default readFromDb;