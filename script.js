//Use the prompt and confirm functions (each at least once) to collect choices from the user (the entire story will take place in dialog boxes, so your body element could actually be empty, apart from the script element to include your JavaScript)
//Use if, else if, and else to branch the story, based on user choices
//In at least one branch, there should be at least 3 choices for the user to make
//It should be impossible for an error to ever occur when playing your game, including handling for null/undefined where appropriate
//At least one number value is collected and used in a comparison (don't forget to convert it into a number first)
//Don't get too carried away — it can be tempting to build a complex video game, but remember, you can always come back and build on this project later

start()

function start () {
  var animal = window.prompt('What pet would you like to adopt? Dog, cat, rat, or squirrel?')
  firstBranch(animal)
}

function firstBranch (pet) {
  if (!pet) {
    var redo = window.confirm('I didn\'t quite get that.\nPress OK if you\'re here to adopt or CANCEL if you\'re not!')
    if (redo) {
      start()
    }else{
      end()
    }
  } else {
    pet = pet.toLowerCase().trim()
    if (pet === 'dog' || pet === 'cat' || pet === 'rat' || pet === 'squirrel') {
      var randomNumber = Math.random()
      secondBranch(randomNumber, pet)
    } else {
      alert('Sorry we dont have any ' + pet + 's here!')
    }
  }
}

function secondBranch (num, pet) {
  var adopt = false
  var clause = ''
  if (num > 0.8) {
    adopt = window.confirm('Turns out this ' + pet +
     ' is part demon. 😈 \nPress OK to adopt anyway or CANCEL to run away!')
     clause = 'demon'
  } else if (num > 0.7) {
    adopt = window.confirm('Wow what a great ' + pet + ' 👍 In order to adopt this one, you have to adopt 99 other' +
     pet + 's\nPress OK to adopt or CANCEL if you changed your mind!')
     clause = '100'
  } else if (num > 0.4) {
    adopt = window.confirm('This is the most perfect ' + pet +
     ' I\'ve ever seen! 😇 \nPress OK to adopt or CANCEL if you\'re just here to waste my time!')
     clause = 'perfect'
  } else {
    adopt = window.confirm('You\'re going to have a fun time training your new baby ' + pet +
     ' 👶 \nPress OK to adopt or CANCEL if you\'re just here to waste my time!')
     clause = 'baby'
  }
}
