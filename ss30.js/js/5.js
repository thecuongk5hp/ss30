function capLastCharOfWords(str) {
    let result = "";
    let capNext = true;
    for (let char of str) {
        if (char === ' ') {
            capNext = true;
        } else {
            if (capNext) {
                char = char.toUpperCase();
                capNext = false;
            }
            result += char;
        }
    }
    console.log("Chuỗi sau khi viết hoa ký tự cuối cùng của mỗi từ:", result);
}
let userInput = prompt("Nhập vào một chuỗi bất kỳ:");
capLastCharOfWords(userInput);
