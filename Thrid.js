let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

function main(input) {
   let numbers = input.split(" ").map(Number);
   let maxNumber=findMax(numbers);
   console.log("The maxNumber is :" ,maxNumber);
    
}

function findMax(numbers) {
    let maxNumber = numbers[0]; 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]; 
        }
    }
    return maxNumber;
}