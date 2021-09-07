const emoji = require('node-emoji');

// If the user has entered an argument
if (process.argv[2]) {
  // If the emoji exists, print it out
  if (emoji.hasEmoji(process.argv[2])) {
    console.log(emoji.get(process.argv[2]));
  }
  // If the emoji does exist
  else {
    console.log('Emoji does not exist');
  }
}
// If the user hasn't entered anything
else {
  console.log(emoji.random().emoji);
}
