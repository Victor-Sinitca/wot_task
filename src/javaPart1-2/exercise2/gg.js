const keyValid = (key) => {
    const reg = /^[a-zA-Z0-9]+$/
    const set = new Set(key)
    return typeof key === "string" && key.length === 10 && reg.test(key)
        && key.length === set.size
}
console.log(keyValid("11dgh34568"))

/*
console.log(Array.from(new Set("12dgh34567")))
console.log(Array.from("12dgh34567"))
*/
