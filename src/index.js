import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea= document.getElementsByName('contenido')[0];
textArea.addEventListener('input',() => {
    const value = textArea.value;
    document.getElementsByClassName('wordCounter')[0].innerHTML='Palabras: '+analyzer.getWordCount(value) 
    document.getElementsByClassName('characterCounter')[0].innerHTML='Caracteres: '+analyzer.getCharacterCount(value)
    document.getElementsByClassName('characterCounterExcluding')[0].innerHTML='Caracteres sin espacios: '+analyzer.getCharacterCountExcludingSpaces(value)  
});

