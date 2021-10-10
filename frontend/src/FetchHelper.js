// Make a GET request to /api/whoami, return the response as pretty JSON
export function fetchApiWhoami(accessToken) {
    return fetch("/api/whoami", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        }
    }).then(response => handleResponseOrError(response))
}

function handleResponseOrError(response) {
    if (response.ok) {
        return response.json()
            .then(json => prettyJsonStringify(json));
    } else {
        return Promise.resolve(prettyJsonStringify({"errorStatus": response.status}))
    }
}

function prettyJsonStringify(jsonResponse) {
    return JSON.stringify(jsonResponse, null, 2);
}
