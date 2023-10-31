function calcFibo(){
    const fibuInput = document.getElementById('inputFibu').value;
    let a = 0;
    let b= 1;
    let result0=[0]
   
    for(let i =0;i<fibuInput-1;i++){
               //e.g. 5
        b=b+a; // b = 1{0},2{1},3{2},5{3},8{4}
        a=b-a  // a = 1{0},1{1},2{2},3{3},5{4}
        console.log(`a:  ${a},b:  ${b}`)
        result0.push(a)
    }
     
    
    console.log(a)
    const result = document.getElementById('showFibo');
    result.textContent = `La secuencia de Fibonacci es:  ${result0}`;
}

