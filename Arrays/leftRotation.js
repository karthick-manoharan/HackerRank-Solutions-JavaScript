function rotate(arr, rotateBy) {
    let mod = rotateBy % arr.length;
    let elemToRotate;
    if (mod) {
        elemToRotate = arr.splice(0, mod);
        return arr.concat(elemToRotate);
    }
    return arr;
}