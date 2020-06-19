const request = require("request")

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d4ead5990c3328b770762d808a69fe2f&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=m'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location!',undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degress out. It feels like '+body.current.feelslike+' degrees out.')
        }
    })
}

module.exports=forecast
