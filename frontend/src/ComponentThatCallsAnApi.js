import {useEffect, useState} from "react";
import {withAuthInfo} from "@propelauth/react";
import {fetchApiWhoami} from "./FetchHelper";

function ComponentThatCallsAnApi(props) {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState("");

    // When the component mounts or our token changes, make a GET request to /api/whoami
    useEffect(() => {
        fetchApiWhoami(props.accessToken)
            .then(response => setResponse(response))
            .finally(() => setLoading(false));
    }, [props.accessToken]);

    if (loading) {
        return <div>Loading...</div>
    }
    return <div>
        Response from server:
        <pre>{response}</pre>
    </div>
}

export default withAuthInfo(ComponentThatCallsAnApi);
