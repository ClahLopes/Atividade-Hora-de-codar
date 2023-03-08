alert(`Calcularemos a área do Triângulo. Informe os dados:`)
var base = parseFloat(prompt(`Qual o valor da base?`))
var altura = parseFloat(prompt(`Qual o valor da altura?`))

var areaTriangulo = (base * altura) / 2
document.write(`A área do triângulo é ${areaTriangulo}.`)
