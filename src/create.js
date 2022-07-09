import sendRequest from './requestHandler.js'

async function create(url, body) {
    let response = "Not yet requested";
    await sendRequest(url, "POST", body)
        .then(data => response = data)
    return response;
}

export default create;