# calculadoraSimples
Calculadora Simples feita em JavaScript

## Proposta:
> Montar a lógica para uma calculadora simples.
> Criar uma função para cada operação:
* Somar
* Subtrair
* Multiplicar
* Dividir
> Imprimir o valor inserido no console e retornar o valor correto da operação.

## Lógica:
> Utilizei *arrow function* para criar as funções intuitivas entituladas com sua operação. Ex.: opSomar
> Cada operação é realizada utilizando **dois parâmetros** que retornam um resultado.
> A função principal **realizarCalculo** recebe dois números e a operação em formato de String (verificada por *==*) como parâmetros. Foi construída também em *arrow function* com a estrutura *if/else* para determinar a operação e retornar na variável **resultado** os valores de cada operação realizada.
> Cada operação é identificada pelas *Strings*:
* "somatório"
* "subtração"
* "multiplicação"
* "divisão"
> Imprimir no console o resultado mostrando a operação escolhida, os números utilizados para o cálculo e o resultado.
> Chamar a função principal **realizarCalculo** e inserir os parâmetros: dois números e a operação.
