const bottle = { color: 'yellow', price: 50, hold: 'water', isCleand: true }
const key = Object.keys(bottle)
console.log(key)
const value = Object.values(bottle)
console.log(value)
const pairs = Object.entries(bottle)
console.log(pairs)
// [property delet]
Object.seal(bottle)
delete bottle.isCleand;
console.log(bottle)
// change property value 
bottle.isCleand = false;
console.log(bottle)