//pontuacao dos jogadores
var pontuacao = [0, 0];
//pontuacao da rodada atual
var pontuacaoRodada = 0;
var rodadaFinal = false;
//jogador atual
var jogadorAtual =  Math.round(Math.random());
//Botões
var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
//Pontuação
var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');
var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];
var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];

botaoLancarDado.addEventListener("click", function () {    
    var dado = Math.floor(Math.random() * 6) + 1;    
    if (dado == 1) { 
        pontuacao[jogadorAtual] = 0;        
        pontuacoesRodadas[jogadorAtual].textContent = 0; 
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];       
        jogadorAtual = 1 - jogadorAtual;
        if(rodadaFinal == true){
            finalizarJogo();
        }
        else{
            rodadaFinal = true;
        }

    }    
    else {        
        pontuacao[jogadorAtual] += dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];        
        pontuacoesRodadas[jogadorAtual].textContent = dado;    
    }
});

botaoPassarVez.addEventListener("click", function () {    
    jogadorAtual = 1 - jogadorAtual;
    if(rodadaFinal == true){
        finalizarJogo();
    }
    else
        rodadaFinal = true;     
});

botaoNovoJogo.addEventListener("click", function () {
    pontuacao = [0, 0];    
    pontuacoesGlobais[0].textContent = 0;
    pontuacoesGlobais[1].textContent = 0;
    pontuacoesRodadas[0].textContent = 0;
    pontuacoesRodadas[1].textContent = 0;
    jogadorAtual =  Math.round(Math.random());
    rodadaFinal = false;     
});

function finalizarJogo(){
    if(pontuacao[0] > pontuacao[1]){
        alert('JOGADOR 1 VENCEU');
    }
    else if(pontuacao[0] == pontuacao[1]){
        alert('EMPATE');
    }
    else{
        alert('JOGADOR 2 VENCEU');
    }

    pontuacao = [0, 0];    
    pontuacoesGlobais[0].textContent = 0;
    pontuacoesGlobais[1].textContent = 0;
    pontuacoesRodadas[0].textContent = 0;
    pontuacoesRodadas[1].textContent = 0;
    jogadorAtual =  Math.round(Math.random());
    rodadaFinal = false;     
}