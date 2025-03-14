let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

function main(input) {
    const array = input.split(/\s+/).map(Number);
    const result = removeDuplicates(array);
    console.log(result);
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
