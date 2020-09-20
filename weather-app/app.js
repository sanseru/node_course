const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=03d2254069a541772256598678b152ac&query=-6.291230,106.817192&units=f'

// request({url: url, json: true}, (error, response)=> {
        
//     // const data = JSON.parse(response.body)
//     // console.log(response.body.current)

//     if (error){
//         console.log('Unable To Connect to Server Weather')
//     }else if (response.body.error){
//         console.log('Unable To find location')

//     }else{

//         const temp = response.body.current.temperature
//         const feels = response.body.current.feelslike
//         const des = response.body.current.weather_descriptions[0]
    
    
//         console.log (des + ' It is Currently '+ temp + ' degree feels like ' + feels )
//     }


// })

// Geocoding
const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2Fuc2VydSIsImEiOiJja2E2aDFjdnMwOGduMndwMGQ0aTd3amFhIn0.dDMB401IShCAv6jFHqHnJg&limit=1'

request({url:url2, json: true},(error, response)=> {

    if(error){
        console.log('Unable to connect to server')
    }else if (response.body.features.length === 0){
        console.log('No Matching Result')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
    
        console.log('Latitude : ' + latitude )
        console.log('Longitude : ' + longitude )
    }



})