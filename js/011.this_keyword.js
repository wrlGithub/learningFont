var a = {
    name:'wang',
    say() { console.log(this);}
}

var b = {
    name:'wang',
    say() {
        return function() {
            console.log(this);
        }
    }
}

var c = {
    name:'wang',
    say() {
        return () => console.log(this); 
    }
}

// a.say() //a
// b.say() //window
// c.say() //c