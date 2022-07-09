import getData from './requestHandler.js'

async function readFromDb(url) {
    let response = "Not yet requested";
    await getData(url, "GET")
        .then(data => response = data)
    console.log(response);
    return response;
}

export default readFromDb;