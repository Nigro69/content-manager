import axios from "axios";

const API =axios.create({
    baseURL:"https://cms.bigbros.link/api/v2",
})

export default API;