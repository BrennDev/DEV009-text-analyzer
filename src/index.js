import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea= document.getElementsByName('user-input')[0];
textArea.addEventListener('keyup',() => {
  const value = textArea.value;
  document.getElementsByClassName('wordCounter')[0].innerHTML='Palabras: '+analyzer.getWordCount(value); 
  document.getElementsByClassName('characterCounter')[0].innerHTML='Caracteres: '+analyzer.getCharacterCount(value);
  document.getElementsByClassName('characterCounterExcluding')[0].innerHTML='Caracteres sin espacios: '+analyzer.getCharacterCountExcludingSpaces(value);
  document.getElementsByClassName('averageWordLength')[0].innerHTML='Promedio de longitud: '+analyzer.getAverageWordLength(value);
  document.getElementsByClassName('numberCounter')[0].innerHTML='Números: '+analyzer.getNumberCount(value);
  document.getElementsByClassName('numberSum')[0].innerHTML='Suma de números: '+analyzer.getNumberSum(value);
});

const resetButton=document.getElementById('reset-button');
resetButton.addEventListener('click',resetAll);

function resetAll(){
  document.getElementsByName('user-input')[0].value=" ";
  document.getElementsByClassName('wordCounter')[0].innerHTML='Palabras: 0'; 
  document.getElementsByClassName('characterCounter')[0].innerHTML='Caracteres: 0';
  document.getElementsByClassName('characterCounterExcluding')[0].innerHTML='Caracteres sin espacios: 0';
  document.getElementsByClassName('averageWordLength')[0].innerHTML='Promedio de longitud: 0';
  document.getElementsByClassName('numberCounter')[0].innerHTML='Números: 0';
  document.getElementsByClassName('numberSum')[0].innerHTML='Suma de números: 0';
}
