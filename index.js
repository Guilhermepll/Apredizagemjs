function carregar () {
    var frs = document.getElementById('frase1')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 00
    frs.innerHTML = `Agora são ${hora} Horas!!`

    if (hora >= 00 && hora < 12){
        img.src = 'meme.png'
    } else if (hora >= 12 && hora < 18){
        img.src = 'foto2.png'
    } else {
        img.src = 'foto3.png'
    }

}