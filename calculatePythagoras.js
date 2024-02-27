function calculateSquareRoot(radicand) {
  try {
    if (radicand <= 0) throw new Error("O radicando deve ser real e positivo");
    return radicand ** (1 / 2);
  } catch (error) {
    console.log(error);
  }
}

function calculatePythagoras(side1, side2) {
  console.log(
    "Os tamanhos dos catetos do meu triângulo retângulo são: ",
    side1,
    side2
  );
  const sum = side1 ** 2 + side2 ** 2;
  console.log("O valor da variável sum é: ", sum);
  return calculateSquareRoot(sum);
}

// console.log(
//   `A hipotenusa de um triangulo de lados 3 e 4 é: ${calculatePythagoras(3, 4)}`
// );

const firstSideRef = document.getElementById("side-1");
const secondSideRef = document.getElementById("side-2");

const calculateButton = document.getElementById("calculate-hypotenuse");
const answerDiv = document.getElementById("answer");

function onCalculateButtonClick() {
  try {
    const firstSide = Number(firstSideRef.value);
    const secondSide = Number(secondSideRef.value);
    if (
      firstSide === "" ||
      secondSide === "" ||
      isNaN(firstSide) ||
      isNaN(secondSide) ||
      firstSide <= 0 ||
      secondSide <= 0
    ) {
      throw new Error("Insira apenas números positivos");
    }
    answerDiv.classList.remove("hidden-element");
    answerDiv.innerHTML = `A hipotenusa de um triangulo de lados ${firstSide} e ${secondSide} é: ${calculatePythagoras(
      firstSide,
      secondSide
    )
      .toFixed(3)
      .replace(/[.,]000$/, "")}
    <div class="left-point"></div>`;
  } catch (error) {
    console.log(error);
  }
}

calculateButton.addEventListener("click", onCalculateButtonClick);
