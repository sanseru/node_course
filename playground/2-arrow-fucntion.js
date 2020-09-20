// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x

// console.log(square(3))


const event = {
    name: 'Birth Day Party',
    gustList: ['Haris','lukman', 'hakim'],
    printGuestList() {
        
        console.log('Gues List For ' + this.name)

        this.gustList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)
        })

    }
}

event.printGuestList()