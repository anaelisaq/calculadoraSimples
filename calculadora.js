const opSomar = (n1, n2) => n1 + n2
const opSubtrair = (n1, n2) => n1 - n2
const opMultipicar = (n1, n2) => n1 * n2
const opDvidir = (n1, n2) => n1 / n2

const realizarCalculo = (n1, n2, op) => {
    let resultado
    if (op == "somatório"){
        resultado = opSomar(n1,n2)
    } else if (op == "subtração") {
        resultado = opSubtrair(n1,n2)
    } else if (op == "multiplicação"){
        resultado = opMultipicar(n1,n2)
    } else if (op == "divisão"){
        resultado = opDvidir(n1,n2)
    }

    console.log(`Operação: ${op} de ${n1} e ${n2} | Resultado: ${resultado}`)
}

realizarCalculo(18, 14, "multiplicação")