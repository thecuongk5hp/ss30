function isSymmetric(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
let myArray = [2, 3, 4, 3, 2];
console.log(isSymmetric(myArray));
