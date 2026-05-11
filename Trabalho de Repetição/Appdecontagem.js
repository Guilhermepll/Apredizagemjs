function apertaa() {
    let c = Number(document.getElementById('numerodefinido').value)
    const limiteescolhido = Number(document.getElementById('numerolimite').value)
    const valordefinido = Number(document.getElementById('numerosomado').value)
    let resposta = document.getElementById('resposta')
    const bt = document.getElementById('butao')

    while (c < limiteescolhido) {
        console.log(c)
        c = c + valordefinido
        
    }
    if(c > limiteescolhido){
           c = c - valordefinido
        }
        resposta.innerText = c
    
    
}