alert(`Calcularemos a área do Círculo. Informe os dados:`)

var pi = 3.14
var raio = parseFloat(prompt(`Qual é o valor do raio?`))

var areaCirculo = (pi * (raio ** 2))
document.write(`A área do Círculo é ${areaCirculo}`)