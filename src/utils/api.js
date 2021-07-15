const { default: axios } = require("axios")
const URL = "https://hahow-recruit.herokuapp.com"
export const getHeroList = async() => {
    const response = await axios.get(`${URL}/heroes`)
    return response.status === 200 ? response.data : response;
}

export const getHeroProfile = async (heroId) => {
    const response = await axios.get(`${URL}/heroes/${heroId}/profile`);
    return response.status === 200 ? response.data : response;
}

export const updateHeroProfile = async (heroId, newProfile) => {
    const response = await axios.patch(`${URL}/heroes/${heroId}/profile`, newProfile);
    if (response.status === 200) {
        return response.data
    } else {
        throw new Error("status not 200");
    }
}