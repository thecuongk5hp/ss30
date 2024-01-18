function countTriangles(arr) {
    let count = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        let a = arr[i];
        let k = i + 2;
        for (let j = i + 1; j < arr.length - 1; j++) {
            while (k < arr.length && arr[i] + arr[j] > arr[k]) {
                k++;
            }
            count += k - j - 1;
        }
    }
    return count;
}
let myArray = [5, 6, 3, 7];
let result = countTriangles(myArray);
console.log("Số lượng tam giác có thể tạo ra từ mảng:", result);
