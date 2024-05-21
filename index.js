// Genera un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
// Obtiene la entrada del usuario
const guessInput = document.getElementById('guessInput');

// Obtiene el párrafo de mensaje
const message = document.getElementById('message');
const imageContainer=document.getElementById("imageContainer")
const ImageResultado=document.getElementById("img")
const ButtonNuevoJuego=document.getElementById("button-juego-nuevo")

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
    ButtonNuevoJuego.style.display="block"
    guessInput.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = 'El número es más grande. Intenta de nuevo.';
    message.style.color = 'red';
  } else {
    message.textContent = 'El número es más pequeño. Intenta de nuevo.';
    message.style.color = 'red';
  }

  if(guess === randomNumber && attempts === 1){
    imageContainer.style.display="block"
    ImageResultado.src="https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg"
  } else if(guess === randomNumber && attempts === 2){
    imageContainer.style.display="block"
    ImageResultado.src="https://d3h7g948tee6ho.cloudfront.net/wp-content/uploads/2021/09/lebron-miami-scaled-e1631772831182.jpg"
  } else if(guess === randomNumber && attempts === 3){
    imageContainer.style.display="block"
    ImageResultado.src="https://ca-times.brightspotcdn.com/dims4/default/c1b96ca/2147483647/strip/true/crop/1704x1229+0+263/resize/1200x866!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F86%2Fe6%2F3dc7a71549d39c96ae70c467936b%2Fla-photos-1staff-492202-sp-0211-kobe-special-section52-wjs.jpg"
  } else if(guess === randomNumber && attempts === 4){
    imageContainer.style.display="block"
    ImageResultado.src="https://cdn.nba.com/manage/2019/03/Larry_Bird_Emotion_ISO.jpg"
  } else if(guess === randomNumber && attempts === 5){
    imageContainer.style.display="block"
    ImageResultado.src="https://cdn.nba.com/manage/2021/08/magic-johnson-iso-archive-1568x882.jpg"
  } else if(guess === randomNumber && attempts === 6){
    imageContainer.style.display="block"
    ImageResultado.src="https://cdn.nba.com/manage/2019/03/Larry_Bird_Emotion_ISO.jpg"
  } else if(guess === randomNumber && attempts === 7){
    imageContainer.style.display="block"
    ImageResultado.src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-01/chamberlain_vceuob1qz6s2157skvlu7w7gm.jpg?itok=WB02eavE"
  } else if(guess === randomNumber && attempts === 8){
    imageContainer.style.display="block"
    ImageResultado.src="https://basketworld.com/blog/wp-content/uploads/2021/06/o%C2%B4neal.jpg"
  } else if(guess === randomNumber && attempts === 9){
    imageContainer.style.display="block"
    ImageResultado.src="https://ca-times.brightspotcdn.com/dims4/default/dac4433/2147483647/strip/true/crop/5632x3755+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F61%2F8c%2F3ee80c143021a3a0883ccbc48ab8%2F354b67ae482b4c688445bb55823dbfc9"
  } else if(guess === randomNumber && attempts >= 10){
    imageContainer.style.display="block"
    ImageResultado.src="https://sportando.basketball/wp-content/uploads/2022/09/Thanasis-Antetokounmpo.jpg"
  } 

  // Limpia la entrada
  guessInput.value = '';
}

document.getElementById('button-juego-nuevo').addEventListener('click', function() {
  // Recargar la página
  location.reload();
});