let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

function main(input) {
   let numbers = input.split(" ").map(Number);
   let odd=FilterOddNumbers(numbers);
   console.log("The FilterOddNumbers :" ,odd);
    
}

function FilterOddNumbers(numbers) {
    let oddmumbers=[];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]%2!==0) {
            oddmumbers.push(numbers[i]);
        }
    }
    return oddmumbers;
}