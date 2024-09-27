// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  countDown(10);
