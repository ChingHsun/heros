const { default: axios } = require("axios")
const URL = "https://hahow-recruit.herokuapp.com"
export const getHeroList = async() => {
    const response = await axios.get(`${URL}/heroes`)
    return response.data
}