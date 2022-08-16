const first = { a: 3, b: 2 };
const secound = { b: 2, a: 3 };
const third = first;
if (first === secound) {
    // console.log('object are equal')

}
else {
    //console.log("object are different")
}

// object stringify the equal opreration
if (JSON.stringify(first) === JSON.stringify(secound)) {
    // console.log('object are equal')

}
else {
    //console.log("object are different")
}

function compareObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const i in obj1) {
        if (obj1[i] == obj2[i]) {
            return false;
        }
    }
    return true;
}
const compare = compareObj(first, secound)
console.log(first)
console.log(secound);
console.log(compare)