# Desafio Módulo 3 #

## Enunciado

Criar uma aplicação com React, realizar cálculo de valorização/depreciação com base em um capital inicial, taxa de juros mensal e quantidade de parcelas mensal, utilizando o conceito de juros compostos.

##### Atividades

Os alunos deverão desempenhar as seguintes atividades:

1. Criar o projeto com o pacote create-react-app ou utilizar o projeto _react-projetobase, já disponibilizado pelo professor no fórum do módulo. Esta última é a forma recomendada pelo professor.
2. Definir os elementos que farão parte do estado da aplicação. O estado da
aplicação deve ser composto do capital inicial, a taxa de juros mensal e o
período. A taxa de juros pode ser tanto positiva (investimento) quanto negativa (depreciação). A implementação da manipulação do estado da aplicação pode ser feita tanto com class components quanto hooks, ficando a escolha à critério do aluno. Entretanto, as questões do desafio serão elaboradas com base em conceitos e implementação referentes somente aos React Hooks.
3. O aluno deve pesquisar/investigar como deve ser feito o cálculo das prestações, com base nas imagens abaixo e no vídeo de apresentação do professor. Há várias formas de se implementar esse cálculo.
4. A interface fica a critério do aluno. O foco da avaliação serão os cálculos e conceitos relacionados à React Hooks.
5. As imagens abaixo podem servir de orientação para o aluno.
Tela inicial da aplicação, que indica que R$ 1.000,00 aplicados a uma taxa de juros de 0,5% ao mês, rende aproximadamente 0,50% ou R$ 5,00 após 1 mês.
Tela após mudança de estado, que indica que R$ 5.900,00, aplicados a uma taxa de juros de 0,8% ao mês, rende aproximadamente 10,03% ou R$ 592,00 após 12 meses. Tela após mudança de estado, que indica que R$ 70.000,00, com taxa de depreciação 2% ao mês, desvaloriza aproximadamente 38,42% ou R$ 26.895,38 após 24 meses. 

Algumas dicas com base na implementação feita pelo professor, que foi feita com a utilização de React Hooks:

1. Faça com que os três inputs do estado da aplicação sejam do tipo number, para conseguir manipular os dados com as setas “para cima” e “para baixo” do teclado.
2. Será cobrado nas questões apenas o valor do capital inicial de até 100.000 reais,taxa de juros entre -12% e 12% ao mês e parcelas de 1 a 36.
3. Além dos três inputs, crie mais uma variável de estado, que será responsável por controlar as “parcelas”.
4. Faça a implementação do cálculo das parcelas com useEffect, utilizando como deps as variáveis de estado referentes aos três inputs. Nesta implementação, eu (Raphael Gomide) não reaproveitei o valor atual das parcelas.
5. Quebre a aplicação em quatro componentes: <App />, <Form /> (com os 3 inputs),
<Installments /> e <Installment /> (parcelas/parcela, em inglês).


## Para iniciar o programa:

1- no diretório src, digite:

Yarn start



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `D`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


