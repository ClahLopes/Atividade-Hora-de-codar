alert(`Calcularemos a área do Trapézio. Informe os dados:`)

var baseMenor = parseFloat(prompt(`Qual o valor da base menor?`))


var baseMaior = parseFloat(prompt(`Qual o valor da base maior?`))

var altura = parseFloat(prompt(`Qual o valor da altura?`))


var areaTrapezio = (((baseMenor + baseMaior) * altura) / 2)

document.write(`A área do trapézio é ${areaTrapezio}.`)