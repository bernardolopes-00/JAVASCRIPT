// Exercicio 1
function mediaAluno(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`A média desse aluno é ${media}.`);
}
// mediaAluno(8, 5, 9);

// Exercicio 2
function mediaAlunoAdaptado(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media;
}

function calcularMediaFinal(nota1, nota2, nota3, notaPf) {
  const mediaSemPf = mediaAlunoAdaptado(nota1, nota2, nota3);
  const mediaFinal = (mediaSemPf + notaPf) / 2;
  console.log(`A media final desse aluno é ${mediaFinal}`);
}

// calcularMediaFinal(8, 5, 9, 8);

// Exercicio 3

function converterParaFarenheit(temperaturaCelsius) {
  const tempFarenheit = (9 / 5) * temperaturaCelsius + 32;
  console.log(`A temperatura em Farenheit é ${tempFarenheit}°F`);
}

converterParaFarenheit(35);

// Exercicio 4

function bernardoTemQuePaguarImposto(valorEtiqueta) {
  const valorComImposto = 1.08875 * valorEtiqueta;
  console.log(`O valor a ser pago é ${valorComImposto}`);
}

bernardoTemQuePaguarImposto(150);

// 8,875% / 100 = 0,08875 + 1.08875
