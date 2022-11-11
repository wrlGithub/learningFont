function marry2(...args) {
    console.log('arguments',args);
    console.log(Array.from(arguments));
    return `${args[0]} is now marry to ${args[1]}`
}
console.log(marry2('wangruilin','xz'));