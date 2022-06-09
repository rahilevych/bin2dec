const input = document.querySelector('#input-number');
const checkbox = document.querySelector('.box__checkbox')
const output = document.querySelector('#output-number');
const button = document.querySelector('.box__button');
const inputLabel = document.querySelector('#input-label');
const outputLabel = document.querySelector('#output-label');
const h1 = document.querySelector('h1');

function bin2dec(num) {
    let array = numToArray(num);
    let sum = 0;
    let j = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
        if ((array[i]) == 1) {
            sum = sum + Math.pow(2, j);
        }
        j--;
    }
    return sum;
}

function dec2bin(num) {
    num = Number(num);
    let bin = [];
    while (num > 0) {
        bin.unshift(num % 2);
        num = (num - num % 2) / 2
    }
    return bin.join("")
}

function numToArray(num) {
    const arr = Array.from(num);
    return arr;
}

function toOutput(checkbox, output) {
    if (checkbox.checked == true) {
        output.value = dec2bin(input.value);
    } else {
        output.value = bin2dec(input.value);
    }
}

button.addEventListener("click", () => { toOutput(checkbox, output) });
checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
        h1.textContent = 'Decimal to binary converter'
        inputLabel.textContent = 'Decimal';
        outputLabel.textContent = 'Binary';
        output.value = '';
        input.value = '';

    } else {
        h1.textContent = 'Binary to decimal converter'
        outputLabel.textContent = 'Decimal';
        inputLabel.textContent = 'Binary';
        output.value = '';
        input.value = '';

    }
})