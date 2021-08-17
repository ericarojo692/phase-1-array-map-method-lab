const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((phrase) => {
   let splitSent = phrase.split(' ')
   const word = splitSent.map((letter)  => letter.charAt(0).toUpperCase() + letter.slice(1) );
   return word.join(" ");
   })
 }
 titleCased();


// const titleCased = () => {
//   return tutorials.map((phrase) => {
//    let splitsent = phrase.split(' ')
//    let titleSent = [];
//    for (let i = 0; i < splitsent.length; i++){
//      let word = splitsent[i];
//      let cap = word.charAt(0).toUpperCase(); 
//      let w = cap + word.slice(1);
//      titleSent.push(w);
//      console.log(i)
//    }
//    return titleSent.join(" ");
//    })
//  }
//  titleCased();


 

