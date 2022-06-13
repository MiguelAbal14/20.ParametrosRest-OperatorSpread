let resultado = 0;

function sumar(a, ...rest){
resultado = a;

rest.forEach(function(n){
    resultado += n;
})
    
}

sumar(4,5,6,10,25,100,50);

console.log(resultado);

//operator spread

const array1 = [1,2,3,4,5],
array2 = [6,7,8,9,10]

console.log(array1,array2);

const array3 = [...array1, ...array2];


console.log(array3);