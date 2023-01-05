function verificar(){
    var data = new Date;
    var ano = data.getFullYear();
    var fano = document.getElementById('txtAno');
    var res = document.querySelector('#res');

    if(fano.value.legth == 0 || fano.value > ano){
        alert('Verifique os dados');
    } else {
        var sex = document.getElementsByName('radSex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')

        if(sex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'bebeHomem.jpg');
            } else if(idade < 21){
                img.setAttribute('src', 'jovemHomem.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'adultoHomem.jpg');
            }else {
                img.setAttribute('src', 'idosoHomem.jpg');
            }
        } else if(sex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'bebeMulher.jpg');
            } else if(idade < 21){
                img.setAttribute('src', 'jovemMulher.jpg');
            } else if (idade < 50){
                img.setAttribute('src', 'adultoMulher.jpg');
            }else {
                img.setAttribute('src', 'idosoMulher.jpg');
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);

    }
}