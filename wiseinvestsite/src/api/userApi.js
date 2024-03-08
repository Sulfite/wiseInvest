import instance from "../_config/axiosConfig";

export const reqLogin = async (nameUser, passUser) => {
    let output = await instance
        .post(`/login`, {
            user: nameUser,
            password: passUser,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                console.log(error.response.data);
                return error.response.data;
                // console.log(error.response.status);
                // console.log(error.response.headers);
            }
        });
    return output;
};

export const reqGetUser = async () => {
    let output = await instance
        .get(`/getUser`, {
            headers: {
                "x-access-token": `${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                console.log(error.response.data);
                return error.response.data;
            }
        });
    return output;
}

export const reqInsertUser = async (data) => {
    let output = await instance
        .post(`/register`, data, {
            headers: {
                "x-access-token": `${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                console.log(error.response.data);
                return error.response.data;
            }
        });
    return output;
};

export const reqPutUser = async (data) => {
    let output = await instance
        .put(`/update`, data, {
            headers: {
                "x-access-token": `${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                console.log(error.response.data);
                return error.response.data;
                // console.log(error.response.status);
                // console.log(error.response.headers);
            }
        });
    return output;
};


export const reqPutPlanUser = async (data) => {
    let output = await instance
        .put(`/updatePlan`, data, {
            headers: {
                "x-access-token": `${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                console.log(error.response.data);
                return error.response.data;
                // console.log(error.response.status);
                // console.log(error.response.headers);
            }
        });
    return output;
};