function marry(person1,person2) {
    console.log(arguments);
    return `${person1} is now marry to ${person2}`
}
console.log(marry('ruilin','xiaozhi'));


function marry2(...args) {
    console.log('arguments',args);
    console.log(Array.from(arguments));
    return `${args[0]} is now marry to ${args[1]}`
}
console.log(marry2('wangruilin','xz'));