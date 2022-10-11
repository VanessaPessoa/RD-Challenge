# RD-Challenge
  Teste técnico para a posição de Pessoa Engenheira de Software (Front) - Sourcing

## Para preparar o ambiente pela primeira vez
  Certifique-se que você tenha o node instalado em sua maquina.
  * Para instalar o yarn:
  ```bash
   npm install --global yarn
  ```
  * Para instalar as dependências:
   ```bash
    yarn install
  ```
  * Usando o npm para instalar as dependências:
  ```bash
    npm install
  ```

## Como rodar os testes
usando o YARN
```bash
cd javascript
yarn
yarn test
```

Ou usando o NPM:

```bash
cd javascript
npm install
npm test
```

## O desafio:
O desafio consiste em um sistema de balanceamento entre clientes e Customer Success (CSs).  Os CSs são os gerentes responsáveis pelos acompanhamentos dos clientes.
### Premissas importantes:
* Um CS pode atender mais de um cliente
* CSs podem se ausentar por um periodo, estando indisponivel para atender os clientes
* CSs têm níveis diferentes
* Clientes podem ter o mesmo tamanho
* Clientes podem ficar sem ser atendidos

### Entrada:
  A função customerSuccessBalancing() recebe 3 parâmetros:
  * customerSuccess
  * customers
  * customerSuccessAway


### Saída:
  A função customerSuccessBalancing() deve retornar o id do Customer Success que atenda mais clientes, caso ocorra um empate deve retornar 0.

### Solução:
  * Separar os CSs que estiverem disponiveis para atendimento.
  * Ordenar os CSs disponíveis pelo seu nível de experiência.
    - Aqui implementei o algoritmo de ordenação quickSort para ter um melhor desempenho
  * Distribuir os clientes aos CS disponível com nível de experiência necessária
    - Percorri todos os CSs já ordenados e atribui os clientes com os níveis de experiência menor ou igual ao nível de experiência do CS.
  * Encontrar o CSs com mais clientes e verificar se não houve empate

### Resultado dos testes:
  Foi dado sete cenários de testes, a solução implementada passou por todos eles:

  ![image](https://user-images.githubusercontent.com/43974084/195086889-da515a65-59c6-40f8-9bcd-8a3977634a79.png)