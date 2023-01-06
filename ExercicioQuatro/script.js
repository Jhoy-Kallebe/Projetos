function gerar(){
    let num = document.querySelector('#txtNum');
    let res = document.querySelector('#res');
    let numReal = num.value;
    if(numReal.length == 0){
        alert('Impossível realizar operação');
    } else {
        res.innerHTML = '';
        for(let c = 1; c <= 10; c++){
            let multi = numReal*c;
            let item = document.createElement('option');
            item.text = `${numReal} x ${c} = ${multi}`;
            res.appendChild(item);
        }
    }
    
}