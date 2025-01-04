/////////////// for-in //////////////////////

const myObject = {
    js: 'javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'ruby', 'py', 'java', 'cpp']
for(const key in programming){
    // console.log(key)
    // console.log(programming[key])
}




const map = new Map()  //not iterable
map.set("a", 1)
map.set("b", 2)
map.set("c", 3)
map.set("a", 4)

for(const key in map){
    console.log(key) //so no result
}