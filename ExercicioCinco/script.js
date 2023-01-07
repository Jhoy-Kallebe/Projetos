let num = document.querySelector('#txtNum');
let mostrador = document.querySelector('#vitrine');
let res = document.querySelector('#res');
var numeros = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true;
    } else {
        return false;
    }
}

function inLista(n){
    if(numeros.indexOf(n) == -1){
        return false;
    } else {
        return true;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){
        var adicionar = numeros.push(num.value);
        var item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        mostrador.appendChild(item);
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
    res.innerHTML = '';
}

function finalizar(){
    if(numeros.length != 0){
        let soma = 0;
        let media = 0;
        let qtdNum = numeros.length;
        let maior = numeros[0];
        let menor = numeros[0];

        for(let pos = 0; pos <= numeros.length -1; pos++){
            soma += Number(numeros[pos]);
            if(numeros[pos] > Number(maior)){
                maior = numeros[pos];
            }
            if (numeros[pos] < Number(menor)){
                menor = numeros[pos];
            }
            
        }

        media = soma/qtdNum;
        res.innerHTML = '';
        res.innerHTML = `<p>Ao todo temos ${qtdNum} numeros cadastrados</p><p>O maior número foi ${maior}</p><p>O menor núrmero foi ${menor}</p><p>A soma de todos os números é ${soma}</p>A média dos valores é ${media}<p></p>`;
    } else {
        alert('Impossível finalizar sem dados')
    }
}