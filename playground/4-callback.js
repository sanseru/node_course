// setTimeout(() => {
//     console.log('two second are up')
// },2000)


// const names = ['amndre', 'harios', 'kas']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude : 0,
//             langtitude : 0
//         }
    
//         callback(data)
//     },2000)
// }


// geocode('jakarta',(manggil)=> {
//     console.log(manggil)
// })


const add = (data1, data2, callback) => {
    setTimeout(() => {
        const tambah = data1 + data2

        callback(tambah)
        
    },2000)
}

add(1,4, (sum)=> {
    console.log(sum)
})