import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea= document.getElementsByName('contenido')[0];
textArea.addEventListener('input',() => {
    const value = textArea.value;
    document.getElementsByName('wordCounter')[0].innerHTML='Recuento de palabras: '+analyzer.getWordCount(value) 
});

