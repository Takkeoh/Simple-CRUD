import getData from './requestHandler.js'

async function create(url, body) {
    let response = "Not yet requested";
    await getData(url, "POST", body)
        .then(data => response = data)
    console.log(response);
    return response;
}

export default create;