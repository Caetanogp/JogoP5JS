# JogoP5JS
 jogop5js
Jogo da Fenda (Rachadura) - p5.js

Este é um jogo simples criado com p5.js onde o jogador pode lançar uma bola que, ao atingir uma superfície, gera uma rachadura que se expande por um tempo limitado.

🚀 Como funciona

O jogador clica na tela para lançar uma bola na direção do clique.

Quando a bola atinge um ponto na tela, ela gera uma rachadura.

A rachadura cresce de forma aleatória por um curto período e depois para.

O jogador pode continuar lançando bolas para criar novas rachaduras.

📝 Explicação do Código

🎮 Estrutura Principal

Variáveis globais:

cracks: Armazena todas as rachaduras criadas.

ball: Representa a bola lançada pelo jogador.

gameOver: Indica se o jogo terminou.

Função setup():

Configura o canvas (600x400 pixels).

Inicializa a bola.

Função draw():

Limpa o fundo da tela.

Se gameOver for true, exibe "Game Over!" e interrompe o jogo.

Atualiza e desenha a bola.

Percorre a lista de rachaduras:

Faz as rachaduras crescerem.

Remove rachaduras que ultrapassaram o tempo máximo de crescimento.

⚾ Classe Ball

A bola que o jogador pode lançar.

constructor():

Define a posição inicial da bola e suas propriedades (raio, velocidade, etc.).

shoot(targetX, targetY):

Calcula o ângulo para o ponto clicado e define a velocidade da bola.

update():

Move a bola conforme sua velocidade.

Se sair da tela, a bola é resetada.

Se colidir com uma rachadura, gera uma nova rachadura e reseta a bola.

reset():

Cria uma nova rachadura na posição da bola.

Retorna a bola para a posição inicial.

display():

Desenha a bola na tela.

🔥 Classe Crack

Representa a rachadura que se forma quando a bola colide com a superfície.

constructor(x, y):

Inicializa uma rachadura com um ponto inicial.

grow():

Expande a rachadura de forma aleatória.

Para o crescimento após um certo tempo (growthTime > 100).

display():

Desenha a rachadura conectando os pontos.

🎯 Controles

Clique do mouse: Lança a bola na direção do clique.

🛠 Melhorias Futuras

Adicionar som ao impacto da bola.

Criar diferentes padrões de rachaduras.

Introduzir um sistema de pontuação.

