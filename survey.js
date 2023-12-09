const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable. ", (name) => {
rl.question('What is an activity you like doing? ', (activity) => {
rl.question('What do you listen to while doing that? ', (song) => {
rl.question("Which meal is your favourite? (eg: dinner, brunch, etc) ", (meal) => {
rl.question("What's your favourite thing to eat for that meal? ", (food) => {
rl.question("Which sport is your absolute favourite? ", (sport) => {
rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
  console.log()
  console.log(`My name is ${name}. I like ${activity}. I like to listen to ${song} while I am ${activity}. My favourite meal of the day is ${meal} and I love to have ${food} for that meal. My absolute favourite sport is ${sport}. Lastly something that I would consider my superpower is ${superpower}.`);

  rl.close();
})
})
}) 
})      
})  
})
});
