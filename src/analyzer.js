const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim().split(/\s+/).length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const str= text.trim().replace(/[\s,.#!$%&;:{}=\-_`~()”“"…]+/g, '');
    return str.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const totalCaracteres = text.trim().replace(/\s+/g, '').length;
    const numPalabras = text.trim().split(" ").length;
    return parseFloat((totalCaracteres/numPalabras).toFixed(2))
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    let numberCount= 0;
    for (let i=0; i<words.length; i++) {     
      if (+words[i] === +words[i] ){   
        numberCount++;
      }
    }
    return numberCount;   
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const word= text.trim().split(/\s+/);

    let numSum= 0;
    for (let i= 0; i < word.length; i++) {
      if (+word[i] === + word[i] ){ 
        numSum += parseFloat(word[i]);
      }
    } 
    return numSum; 
  },
};
export default analyzer;
