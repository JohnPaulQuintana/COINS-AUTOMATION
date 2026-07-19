import axios from "axios";


const api = axios.create({
    baseURL: "https://crypto-monitoring-ajh4.onrender.com/api"
});


export const getTrends = async () => {

    const response = await api.get(
        "/trends"
    );

    console.log(response)
    return response.data;
};