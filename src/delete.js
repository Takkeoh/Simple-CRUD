import sendRequest from './requestHandler.js'

async function deleteFromDb(url) {
    let response = "Not yet requested";
    await sendRequest(url, "DELETE")
        .then(data => response = data)
    return response;
}

export default deleteFromDb;