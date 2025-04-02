# Equipe: Caetano Padoin

## Jogo da Fenda

Este projeto é um jogo desenvolvido em p5.js onde o jogador pode arremessar uma bola. Ao colidir com a borda da tela ou com uma rachadura existente, uma nova rachadura é gerada.

## Como funciona

- O jogador clica em qualquer lugar da tela para lançar a bola na direção do clique.
- Se a bola atingir a borda da tela ou uma rachadura, ela retorna à posição inicial e uma nova rachadura aparece no ponto de impacto.
- As rachaduras crescem por um tempo limitado e depois desaparecem.

## Estrutura do código

### Variáveis principais
- `cracks`: Armazena todas as rachaduras na tela.
- `ball`: Objeto da classe `Ball` que representa a bola.
- `gameOver`: Define se o jogo terminou ou não.

### Funções principais
- `setup()`: Inicializa o canvas e cria a bola.
- `draw()`: Atualiza e renderiza os elementos do jogo, verificando colisões e removendo rachaduras antigas.
- `mousePressed()`: Dispara a bola na direção do clique.

### Classe `Ball`
Representa a bola lançada pelo jogador.
- `shoot(targetX, targetY)`: Calcula a direção da bola com base no clique do jogador.
- `update()`: Move a bola e verifica colisões.
- `reset()`: Retorna a bola à posição inicial e cria uma nova rachadura.
- `display()`: Desenha a bola na tela.

### Classe `Crack`
Representa uma rachadura que cresce ao longo do tempo.
- `grow()`: Faz a rachadura crescer até um limite de tempo.
- `display()`: Renderiza a rachadura na tela.

## Como jogar
1. Execute o código no p5.js.
2. Clique em qualquer ponto da tela para lançar a bola.
3. Observe a rachadura aparecer no ponto de impacto.
4. Continue jogando e criando rachaduras!

Divirta-se!

