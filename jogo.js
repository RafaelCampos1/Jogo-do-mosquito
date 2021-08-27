
var altura = 0
var largura = 0
var vidasPerdidas = 1
var tempo = 30

var criaMosquitoTempo = 1000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Medio') {
	//1000
	criaMosquitoTempo = 750
} else if (nivel === 'Dificil') {
	//750
	criaMosquitoTempo = 500
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


function posicaoRandomica() {
	
	var srcImg = retornaImg();
	//bomba

	
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		
		//console.log('elemento selecionado foi: v' + vidas)
		if(vidasPerdidas > 2) {
			window.location.href = 'fim_de_jogo.html'
			return 
		}else{
			vidasPerdidas++
			document.getElementById('v' + vidasPerdidas).src = "imagens/coracao_vazio.png"

		}
	}else if(document.getElementById('bomba')){
		document.getElementById('bomba').remove()
	}
	
	
	//remover o mosquito anterior (caso exista)


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)
	console.log('vidas ' + vidasPerdidas)
	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.src = srcImg ;
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	if( srcImg== 'imagens/mosquito.png')
	mosquito.id = 'mosquito'
	else
	mosquito.id = 'bomba'
	mosquito.onclick = function() {
		if(srcImg == 'imagens/bomba.png'){
			if(vidasPerdidas > 2) 
			window.location.href = 'fim_de_jogo.html'

			vidasPerdidas++;
			document.getElementById('v' + vidasPerdidas).src = "imagens/coracao_vazio.png"

		}
		
		this.remove()
		return;
	}



	

	document.body.appendChild(mosquito)


}

function retornaImg(){

	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'imagens/mosquito.png'
		
		case 1:
			return 'imagens/bomba.png'
	}

}

let tamanhoAleatorio = function() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

