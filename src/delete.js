import getData from './requestHandler.js'

async function deleteFromDb(url) {
    let response = "Not yet requested";
    await getData(url, "DELETE")
        .then(data => response = data)
    return response;
}

export default deleteFromDb;