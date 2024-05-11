// Genera un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
// Obtiene la entrada del usuario
const guessInput = document.getElementById('guessInput');

// Obtiene el párrafo de mensaje
const message = document.getElementById('message');

// Contador de intentos
let attempts = 0;

// Comprueba la adivinanza
function checkGuess() {
  // Obtiene el valor ingresado por el usuario
  const guess = parseInt(guessInput.value);
  
  // Incrementa el contador de intentos
  attempts++;

  // Verifica si la adivinanza es correcta
  if (guess === randomNumber) {
    message.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
    message.style.color = 'green';
    guessInput.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = 'El número es más grande. Intenta de nuevo.';
    message.style.color = 'red';
  } else {
    message.textContent = 'El número es más pequeño. Intenta de nuevo.';
    message.style.color = 'red';
  }

  // Limpia la entrada
  guessInput.value = '';
}
