var listadepecas = ["flitro de ar","motor","amortecedor"]

if(listadepecas<10){
    //Cadastro
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não tem mais espaço")
}

let peso = 50;
if(peso>100){
    //verificação de peso
    console.log("A peça deve pesar no minimo 100g")
} else{
    console.log("Peso adequado")
}

let nomepeca="Disco de freio"
if(nomepeca.length>3){
    console.log("nome de peça adequado")

}else{
    console.log("O nome dece ter mais de 3 caracteres")
}