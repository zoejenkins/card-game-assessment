//Card game program - version 1
//Zoe Jenkins
//10/08/2021

console.log('Welcome to my card guessing game!')

//asks player to enter their name and stores it in a variable
let definedName1 = prompt('Player 1, what is your name?')
//sets list of options for random names and saves as a variable
randomName = ['Swagboywastaken420', 'Mikehawk69', 'Hotgirlunicorn', 'Cupcakellama28', 'Tess tickles', '23friendlyblocky', 'Joe mama', 'Minecraftsux', 'PogboyHD_jpg'];
//picks a random name from the list
let pickedrandomName1 = randomName[Math.floor(Math.random() * 8 + 0)];
//sets conditions for when random name is used
if (definedName1 == '') {
  //welcome user with random name to the game
	console.log('Welcome ' + pickedrandomName1 + ' to my number guessing game.');
  //sets conditions from when defined name is used
} else {
  //welcomes user with defined name to the game
	console.log('Welcome ' + definedName1 + ' to my number guessing game.');
}
//repeats above code for player 2 
let definedName2 = prompt('Player 2, what is your name?')
let pickedrandomName2 = randomName[Math.floor(Math.random() * 4 + 0)];
if (definedName2 == '') {
	console.log('Welcome ' + pickedrandomName2 + ' to my number guessing game.');
} else {
	console.log('Welcome ' + definedName2 + ' to my number guessing game.');
}
//sets values for name variables
let name1 = (definedName1 || pickedrandomName1)
let name2 = (definedName2 || pickedrandomName2)

  let lives = prompt('How many lives do you want to have?')
  if (isNaN(lives) || lives == null || lives == '' || lives < 0) {
	lives = prompt('How many lives do you want to have?')
}
let livesPlayer1 = lives
let livesPlayer2 = lives

//picks random values for cards
  card1 = Math.floor(Math.random() * 13 + 1);
  card2 = Math.floor(Math.random() * 13 + 1);

  //picks random values for cards
  cardDrawn1 = Math.floor(Math.random() * 13 + 1);
  cardDrawn2 = Math.floor(Math.random() * 13 + 1);

  console.log(name1 + ' the card on the table is a ' + card1)

  let hiLo1 = prompt('Do you think your card will be higher or lower?')

  if (hiLo1 == 'higher' && card1 < cardDrawn1){
    console.log('Congrats! Your card was a ' + cardDrawn1 + ' which is higher than the first card. You win! Point to you!')
  } else if(hiLo1 == 'higher' && card1 > cardDrawn1){
    console.log('Uh oh. Your card was a ' + cardDrawn1 + ' which is lower than the first card. You lose! No points for you.')
  } else if(hiLo1 == 'lower' && card1 > cardDrawn1){
    console.log('Congrats! Your card was a ' + cardDrawn1 + ' which is lower than the first card. You win! Point to you!')
  } else if(hiLo1 == 'lower' && card1 < cardDrawn1){
   console.log('Uh oh. Your card was a ' + cardDrawn1 + ' which is higher than the first card. You lose! No points for you.')
  } else if(card1 == cardDrawn1){
    console.log('Your cards were even. Unlucky! No points for you.')
  } else{
    hiLo1 = prompt('Do you think your card will be higher or lower?')
  }

console.log(name2 + ' your card is ' + card2)

let hiLo2 = prompt('Do you think your card will be higher or lower?')

  if (hiLo2 == 'higher' && card2 < cardDrawn2){
    console.log('Congrats! Your card was a ' + cardDrawn2 + ' which is higher than the first card. You win! No lives taken.')
  } else if(hiLo2 == 'higher' && card2 > cardDrawn2){
    console.log('Uh oh. Your card was a ' + cardDrawn2 + ' which is lower than the first card. You lose! No points for you.')
  } else if(hiLo2 == 'lower' && card2 > cardDrawn2){
    console.log('Congrats! Your card was a ' + cardDrawn2 + ' which is lower than the first card. You win! Point to you!')
  } else if(hiLo2 == 'lower' && card2 < cardDrawn2){
   console.log('Uh oh. Your card was a ' + cardDrawn2 + ' which is higher than the first card. You lose! No points for you.')
  } else if(card2 == cardDrawn2){
    console.log('Your cards were even. Unlucky! No points for you.')
  } else{
    hiLo2 = prompt('Do you think your card will be higher or lower?')
  }

//next time change points to lives and take lives off every time i guess incorrectly