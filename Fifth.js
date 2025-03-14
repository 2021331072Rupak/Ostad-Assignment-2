 let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

function main(input) {
  let w=input.split(" ").map(String);
    let cnt = countLetters(input);
    console.log("The total number of word is:", cnt);
}

function countLetters(w) {
     if (w.length === 0) {
        return 0; 
    }
    let words = w.split(" ").filter(w => w.length > 0);
    return words.length;
}
