const text = 'I automate processes and...\n make things communicate! \n What´s your problem?';
let index = 0;
const speed = 150; // Velocidade da digitação
const delay = 2000; // Tempo antes de reiniciar

function type() {
  if (index < text.length) {
    if (text.charAt(index) === '\n') {
      document.getElementById('typed-text').innerHTML += '<br>';
    } else {
      document.getElementById('typed-text').innerHTML += text.charAt(index);
    }
    index++;
    setTimeout(type, speed);
  } else {
    setTimeout(() => {
      document.getElementById('typed-text').innerHTML = '';
      index = 0;
      type();
    }, delay);
  }
}

type();