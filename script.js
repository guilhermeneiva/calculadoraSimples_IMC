function calcularIMC() {
  let nome = document.getElementById('nome').value
  let altura = parseFloat(document.getElementById('altura').value)
  let peso = parseFloat(document.getElementById('peso').value)

  if (isNaN(altura) || isNaN(peso) || peso <= 0 || altura <= 0) {
    document.getElementById('resultadoHTML').innerHTML = 'Digite números válidos'
  } else {
    let resultado = peso / (altura * altura)
    resultado = resultado.toFixed(2)

    if (resultado > 18.5 && resultado < 24.9) {
      document.getElementById('resultadoHTML').innerHTML = `Olá ${nome}, seu IMC é de ${resultado}.<br> Ótimo, você está saudável!<br> Peso considerado saudável é entre 18,5 e 24,9.`

    } else if (resultado < 18.5) {
      document.getElementById('resultadoHTML').innerHTML = `Olá ${nome}, seu IMC é de ${resultado}.<br> Você está abaixo do IMC considerado saudável!<br> Peso considerado saudável é entre 18,5 e 24,9.`

    } else {
      document.getElementById('resultadoHTML').innerHTML = `Olá ${nome}, seu IMC é de ${resultado}.<br> Você está acima do IMC considerado saudável!<br> Peso considerado saudável é entre 18,5 e 24,9`
    }

  }
}