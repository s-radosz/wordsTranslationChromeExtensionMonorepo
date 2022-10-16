import axios from "axios";

export const handleGetRequest = (path, token) => {
    //console.log(["token", token])
    return new Promise(resolve => {
        axios
            .get(path, { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                //console.log(["status", response.status])
                if (response?.status === 200) {
                    resolve(response?.data?.result);
                }
            })
            .catch(err => {
                if (
                    err?.response?.data?.status ===
                        "Authorization Token not found" ||
                    err?.response?.data?.status === "Token is Expired"
                ) {
                    localStorage?.clear();
                }
                //console.log(["err", err, err.response, err.response.status, err.response.data.status])
            });
    });
};

export const handlePostRequest = (path, paramsObject, token = "") => {
    return new Promise(resolve => {
        //console.log(["post", path, paramsObject])
        axios
            .post(
                path,
                paramsObject,
                token && { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(response => {
                if (response.status === 200) {
                    resolve(response.data.result);
                }
            })
            .catch(err => {
                if (err.response.status === "Authorization Token not found") {
                    localStorage.clear();
                }
                //console.log(["err", err])
            });
    });
};

export const handleRemoveRequest = (path, paramsObject) => {
    return new Promise(resolve => {
        //console.log(["remove", path, paramsObject])
        axios
            .delete(path, paramsObject)
            .then(response => {
                if (response.status === 200) {
                    resolve(response.data.result);
                }
            })
            .catch(err => {
                if (err.response.status === "Authorization Token not found") {
                    localStorage.clear();
                }
                //console.log(["err", err])
            });
    });
};
