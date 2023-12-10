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
    

    if (validaNumero(segundo.value,primeiro.value)){
        const formcert = document.querySelector('.valido')
        formcert.innerHTML = mensgemValida
        formcert.style.display = 'block'
        

        primeiro.value = ''
        segundo.value = ''


    } else {
        const errado = document.querySelector('.invalido')
        errado.innerHTML = mensagemInval
        errado.style.display = 'block'
        
        setTimeout(function() {
            errado.style.display = 'none';
        }, 3000);

        primeiro.value = ''
        segundo.value = ''
    }
})

