 export default function defineReactive(data , key , val) {
    if( arguments.length === 2){
        val = obj[key]
    }
    Object.defineProperties( data, key , {
        enumerable: true,
        configurable: true,
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

 }