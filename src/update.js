import getData from './requestHandler.js'

async function updateDb(url, body) {
    let response = "Not yet requested";
    await getData(url, "PATCH", body) // Should be PUT if the whole data is replaced; might handle that later.
        .then(data => response = data)
    console.log(response);
    return response;
}

export default updateDb;