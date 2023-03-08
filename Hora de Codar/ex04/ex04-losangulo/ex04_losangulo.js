alert(`Calcularemos a área do Losangulo. Informe os dados:`)

var diagonalMenor = parseFloat(prompt(`Qual o valor da diagonal menor?`))


var diagonalMaior = parseFloat(prompt(`Qual o valor da diagonal maior?`))


var areaLosangulo = ((diagonalMenor * diagonalMaior) / 2)

document.write(`A área do losangulo é ${areaLosangulo}.`)


/*PROCURAR UM METODO PARA ACEITAR QUANDO O USUARIO COLOCAR VIRGULA AO INVÉS DO PONTO NO PROMPT*/