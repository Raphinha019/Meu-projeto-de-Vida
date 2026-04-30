const botoes = document.querySelectorAll('.botao')

for(let botao = 0; botao <4; botao++){
    botoes[botao].onclik = function(){
    botoes[botao].classList.add("ativo")
    }
}