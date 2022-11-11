const obj = {}

let val =1
Object.defineProperty( obj, a , {
    get() {
        console.log('get property a');
        return val
    },
    set(newVal) {
        if( val === newVal ) {
            return
        }
        console.log(`set property a -> ${newVal}`)
        val = newVal
    }

})