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
    const str= text.trim().replace(/[\s,.#!$%&;:{}=\-_`~()”“"…]+/g, '')
    return str.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return ((text.trim().replace(/\s+/g, '').length)/(text.trim().split(/\s+/).length)).toFixed(2)
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const words= text.split(" ");

    const numberCount= [];
    for (let i= 0; i < words.length; i++) {
      if (!isNaN(parseInt(words[i]))) {
        numberCount.push(words[i]);
      }
    } 
    return numberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const word= text.split(" ");

    let numSum= 0;
    for (let i= 0; i < word.length; i++) {
      if (!isNaN(parseInt(word[i]))) {
        numSum += parseInt(word[i]);
      }
    } 
    return numSum;
  },
};
export default analyzer;
