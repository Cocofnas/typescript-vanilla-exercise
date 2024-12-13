"use strict";
var _a, _b;
const reverseWord = (word) => word.split('').reverse().join('');
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const repeatWord = (word, times) => word.repeat(times);
const countVowels = (word) => (word.match(/[aeiouyåäö]/gi) || []).length;
const transformWord = (operation, word, param) => {
    switch (operation) {
        case 'reverse':
            return reverseWord(word);
        case 'capitalize':
            return capitalizeWord(word);
        case 'repeat':
            if (param !== undefined && param > 0) {
                return repeatWord(word, param);
            }
            throw new Error("Invalid parameter for 'repeat' operation");
        case 'countVowels':
            return countVowels(word);
        default:
            throw new Error('Invalid operation');
    }
};
const runTransformation = () => {
    const wordInput = document.getElementById('word');
    const operationInput = document.getElementById('operation');
    const paramInput = document.getElementById('param');
    const resultContainer = document.getElementById('result');
    const word = wordInput.value;
    const operation = operationInput.value;
    const param = operation === 'repeat' ? parseInt(paramInput.value, 10) : undefined;
    try {
        const result = transformWord(operation, word, param);
        resultContainer.textContent = `Result: ${result}`;
        resultContainer.classList.add('active');
    }
    catch (error) {
        resultContainer.textContent = `Error: ${error.message}`;
        resultContainer.classList.add('active');
    }
};
// Show/hide param input based on selected operation
(_a = document.getElementById('operation')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
    const paramContainer = document.getElementById('paramContainer');
    paramContainer.classList.toggle('active', this.value === 'repeat');
});
// Event listener for transform button
(_b = document.getElementById('transformButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', runTransformation);
