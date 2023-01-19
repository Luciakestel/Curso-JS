let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let result = 1;

for(let i= 0; list.length; i++){
    if (list[i] >10){
        break;
    }
    result = result * list[i];
}

console.log(result);