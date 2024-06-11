const { default: axios } = require("axios");

const getGooglePlace=(category,radius,lat,lng)=>axios.get('/api/nearby?'+
'category='+category+'&radius='+radius+'&lat='+lat+'&lng='+lng)

export default{
    getGooglePlace
}

