function calculateSquareRoot(radicand) {
  if (radicand <= 0) {
    throw new Error("O radicando deve ser real e positivo");
  }
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  try {
    const sum = side1 ** 2 + side2 ** 2;
    return calculateSquareRoot(sum);
  } catch (error) {
    console.log(error);
  }
}

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
  } finally {
    console.log("Tente novamente");
  }
}

calculateButton.addEventListener("click", onCalculateButtonClick);
