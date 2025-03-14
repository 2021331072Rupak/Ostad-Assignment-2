let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

function main(input) {
    let numbers = input.split(" ").map(Number);
    let a = numbers[0];
    let b = numbers[1];
    console.log(calculateSum(a, b));
}

function calculateSum(a, b) {
    return a + b;
}