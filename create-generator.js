


const initFunctionMap = {
  '1' : (text, offset) => text.split(" ")
  //multiply by two so that only every other word is calculated for
  .slice(0, offset * 2).join(" ")
  .concat((offset == 0 || offset * 2 >= text.split(" ").length) ? "" : " ")
  .concat(
    text.split(" ")
    .slice(offset * 2)
    .map((word, index) => ((index % 2)  === 0) ? word : "-".repeat(word.length))
    .join(" ")),
  '2' : (text, offset) => text.split(" ")
  //multiply by two so that only every other word is calculated for
  .slice(0, offset * 2)
  .join(" ")
  .concat((offset == 0 || offset * 2 >= text.split(" ").length) ? "" : " ")
  .concat(
    text.split(" ")
    .slice(offset * 2)
    .map((word, index) => ((index % 2)  === 1) ? word : "-".repeat(word.length))
    .join(" "))
}


function createGenerator(initialText, level){

  return function* generator(){
    let allDone = false;
    let counter = 0;
    while(!allDone){
      const displayText = initFunctionMap[level](initialText, counter)
      yield displayText;
      allDone = displayText === initialText;
      counter++;
    }
  }();
}



module.exports = createGenerator;
