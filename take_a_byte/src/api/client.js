import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.spoonacular.com/recipes"
});
export default apiClient;



/*function Client() {
    const url = axios.create({
        baseURL: `https://625f0f6a3b039517f1007a5c.mockapi.io`
    });
    async function getSpots() {
        const res = await url.get("/spot");
        return res.data;
    }
}

export default Client;

/*export default axios.create({
        baseURL: `https://625f0f6a3b039517f1007a5c.mockapi.io`
    });*/

