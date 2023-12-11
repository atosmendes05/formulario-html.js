const forme = document.getElementById('form')
const primeiro = document.getElementById('numero A')
const segundo = document.getElementById('numero B')


function validaNumero(numeroMaior,numeroMenor){
    const resultado = numeroMaior > numeroMenor
    return resultado
}



forme.addEventListener('submit',function(e){
    e.preventDefault()

    const mensgemValida = `o formulario está Valido`
    const mensagemInval =  `o formulario está Invalido` 
    

    if (validaNumero(parseFloat(segundo.value),parseFloat(primeiro.value))){
        const certo = document.querySelector('.valido')
        certo.innerHTML = mensgemValida
        certo.style.display = 'block'
        
 
        setTimeout(function() {
            certo.style.display = 'none';
        }, 1000);


        primeiro.value = ''
        segundo.value = ''
    
    } else {
        const errado = document.querySelector('.invalido')
        errado.innerHTML = mensagemInval
        errado.style.display = 'block'
        
        setTimeout(function() {
            errado.style.display = 'none';
        }, 1000);

        primeiro.value = ''
        segundo.value = ''
    }
})

