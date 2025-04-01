let fullOperation = '';
let screenHTML = document.getElementById("operation");
let resultados = [];
let historia = document.querySelector(".hist");

function addNumber(number) {
  let op = fullOperation.split('');
  if (op.includes('+') && number.toString() === '+') return;
  else if (op.includes('-') && number.toString() === '-') return;
  else if (op.includes('x') && number.toString() === 'x') return;
  else if (op.includes('^') && number.toString() === '^') return;



  if(number === "="){
    calculate();
    //Mostrar historial de operaciones.
    show();
    return;
  }

  fullOperation = fullOperation + number.toString();

  showNumber();

}

function calculate(){
    let op = fullOperation.split('');
    //Suma
    if (op.includes('+')){
    let number = fullOperation.split('+');
    let result = Number(number[0]) + Number(number[1])
    fullOperation = "";
    screenHTML.innerHTML=result;
    //resultados.push(number[0],"+",number[1],"=",result.toString())
    hist("+",number,result)
    }
    //Multipliación
    else if (op.includes('x')){
    let number = fullOperation.split('x');
    let result = Number(number[0]) * Number(number[1])
    fullOperation = "";
    screenHTML.innerHTML=result;
    //resultados.push(number[0],"x",number[1],"=")
    hist("x",number,result)
    }
    //Resta
    else if (op.includes('-')){
    let number = fullOperation.split('-');
    let result = Number(number[0]) - Number(number[1])
    fullOperation = "";;
    screenHTML.innerHTML=result;
    //resultados.push(number[0],"-",number[1],"=",result.toString())
    hist("-",number,result)
    }
    //Potencia
    else if (op.includes('^')){
    let number = fullOperation.split('^');
    let result = Number(number[0]) ** Number(number[1])
    fullOperation = "";
    screenHTML.innerHTML=result;
    //resultados.push(number[0],"^",number[1],"=",result.toString())
    hist("^",number,result)
    }

}

function clearALL(){
    fullOperation = ""
    screenHTML.innerHTML = ""
    resultados = []
    historia.innerHTML = "";
}
function hist(operation, number, result){
    resultados.push(`${number[0]} ${operation} ${number[1]} = ${result}`);

    console.log(resultados)
}

function show(){
    let p = document.createElement("p");
    p.classList.add("hist-main");

    resultados.forEach(element => {
        historia.appendChild(p);
        p.innerHTML = element;
    })

}

  function showNumber() {
  document.getElementById('operation').innerHTML = fullOperation;
}