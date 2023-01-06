function clicou(){
    var inicio = document.querySelector('#txtNum');
    var fim = document.querySelector('#txtNumFim');
    var passo = document.querySelector('#txtPasso');
    var res = document.querySelector('#res');

    var inicioNum = Number(inicio.value);
    var fimNum = Number(fim.value);
    var passoNum = Number(passo.value);


    if(inicio.value.length > 0 && fim.value.length > 0 && passo.value.length > 0){
        res.innerHTML = '';

        if(passoNum > 0){
            if(inicioNum < fimNum){
                for(;inicioNum <= fimNum; inicioNum += passoNum){
                    res.innerHTML += inicioNum+' ';
                }
            } else if(inicioNum == fimNum){
                res.innerHTML = 'Os números são iguais'; 
            } else {
                for(;inicioNum >= fimNum; inicioNum -= passoNum){
                    res.innerHTML += inicioNum+' ';
                }
            }
        } else {
            if(inicioNum < fimNum){
                for(;inicioNum <= fimNum; inicioNum ++){
                    res.innerHTML += inicioNum+' ';
                }
            } else if(inicioNum == fimNum){
                res.innerHTML = 'Os números são iguais'; 
            } else {
                for(;inicioNum >= fimNum; inicioNum --){
                    res.innerHTML += inicioNum+' ';
                }
            }
        }
        
    } else {
        res.innerHTML = 'Preencha os campos corretamente!';
    }

}