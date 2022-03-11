function key(o, level) {
    let arr = []
    function from(ob, l) {
        Object.keys(ob).forEach(key => {
            if(arr[l]) arr[l].push(key);
            else arr[l] = [key]

            if(l !== level - 1) {
                from(ob[key], l + 1)
            }
        })     
    }
    from(o, 0)
    return arr[level - 1]
    
}
let obj = {
    name: {
        a: 1,
        b: 2,
        c: {
            o: 9,
            p: 10,
            q: 11
        }
    },
    age: {
        m: 3,
        n: 4
    }

}

console.log(key(obj, 1));
console.log(key(obj, 2));
console.log(key(obj, 3));

// [ 'name', 'age' ]
// [ 'a', 'b', 'c', 'm', 'n' ]
// [ 'o', 'p', 'q' ]