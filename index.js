const gForm = document.querySelector('.guess__form');
const gInput = document.querySelector('.guess__input');
const gButton = document.querySelector('.guess__btn');
const gArea = document.querySelector('.guess__section');

gInput.addEventListener('keyup', toggleBtn);
gForm.addEventListener('submit', handleSubmit);

function toggleBtn() {
  if(gInput.value){ gButton.removeAttribute('disabled') } else
  if(!gInput.value){ clearInput() }
}

function handleSubmit(e) {
  e.preventDefault();
  let phrase = randomPhrase();
  if(gInput.value === 'right answer'){ 
    phrase = 'woooo ding ding ding ding!';
    gArea.innerHTML = ''
  }
  addGuess(phrase);
  clearInput();
}

function addGuess(phrase) {
  gArea.innerHTML = 
    `<article class="guess__box">
      <button 
        onClick={this.parentNode.parentNode.removeChild(this.parentNode)} 
        class="guess__delete_btn">
      x</button>
      <p>${phrase}</p>
    </article>` + gArea.innerHTML
}
  
function clearInput() {
  gInput.value = '';
  gButton.setAttribute('disabled', true)
}

function randomPhrase() {
  const phrases = [
    'That guess was fucking wrong.',
    'Holy shit what a bad guess.',
    'No, No, No, wtf',
    'Omg, srsly? Wrong',
    'Here we go again, just another wrong guess, fuck.',
    'Ooo, that was a close one, but no.',
    'Try again one more time.',
    'Super wrong, buddy.',
    'Greaaat another wrong answer.',
    'This is an incorrect response.',
    'This response is wrong.',
    'Go home, you\'re drunk'
  ]
  const randomPhrase = phrases[Math.random()*phrases.length-1+0.5<<0];
  return randomPhrase;
}
