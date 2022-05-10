const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   process.stdout.write(char);
// }

const printWithAnimation = function(text) {
  
  for (let i = 0; i < text.length; i++) {
    
    setTimeout(() => {
      process.stdout.write(text.charAt(i));
    }, i * 50)

  }
}

printWithAnimation(sentence);