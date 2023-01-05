function carregar(){
    var horaTxt = document.querySelector('#hora');
    var img = document.querySelector('#imagem');
    var msg = document.querySelector('#mensagem');
    var data = new Date();
    var hora = data.getHours();
    horaTxt.innerHTML = `Agora são ${hora} horas`;

    if(hora >= 0 && hora < 12){
        msg.innerText = `Bom Dia!`;
        img.src = 'imagem/manha.jpg';
        document.body.style.background = '#3498db';
    } else if(hora < 18){
        msg.innerText = `Boa Tarde`;
        img.src = 'imagem/tarde.jpg';
        document.body.style.background = '#e67e22';
    } else {
        msg.innerText = `Boa Noite`;
        img.src = 'imagem/noite.jpg';
        document.body.style.background = '#2c3e50';
    }
}


