let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});

function main(input) {
   // let numbers = input.split(" ").map(Number);
    let a = input.split(" ").map(Number);
    //let b = numbers[1];
    console.log(isEven(a));
}

function isEven(a) {
    if(a%2==0){
      return true;
    }
    else{
      return false;
    }
}