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
    } else {
      end(false, '', '', '')
    }
  } else {
    pet = pet.toLowerCase().trim()
    if (pet === 'dog' || pet === 'cat' || pet === 'rat' || pet === 'squirrel') {
      var randomNumber = Math.random()
      age(randomNumber, pet)
    } else {
      var redo = window.confirm('Sorry we dont have any ' + pet + 's here!\nPress OK if you\'re interested in a dog, cat, rat, or squirrel or CANCEL if you\'re not!')
      if (redo) {
        start()
      } else {
        end(false, '', '', '')
      }
    }
  }
}

function age (num, pet) {
  var age = window.prompt('Please enter your age ')
  var redo
  if (!age || isNaN(parseInt(age.trim()))) {
    redo = window.confirm('I need to confirm your age before you can adopt a pet.\nPress OK if you want to start over or CANCEL if you don\'t!')
    if (redo) {
      firstBranch (pet)
    } else {
      end(false, '', '', '')
    }
  } else {
    age = parseInt(age.trim())
    if (age >= 18) {
      alert('Great! ' + age + ' is over 18 so you are qualified to adopt a ' + pet)
      secondBranch(num, pet)
    } else {
      alert('Unfortunately, ' + age + ' is too young to adopt a ' + pet + '\nCome back with an adult if you would like to try again!')
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
  } else if (num > 0.6) {
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
  if (adopt) {
    adoption(pet, clause)
  } else {
    end(false, clause, '', pet)
  }
}

function adoption (pet, clause) {
  var name = window.prompt('What would you like to name your new pet? ')
  if (!name) {
    alert('You didn\'t enter a name so we\'re calling your ' + pet + 'Cookie!')
    name = 'Cookie'
  } else {
    name = name.trim()
  }
  end(true, clause, name, pet)
}

function end (adopted, clause, name, pet) {
  var message = ''
  if (!adopted && !clause) {
    message = 'Bye! Come back any time if you decide you want to adopt!'
  } else if (!adopted) {
    message += 'I can\'t believe you decided not to adopt '
    if (clause === 'demon') {
      message += 'a demon ' + pet + '!'
    } else if (clause === '100') {
      message += '100 ' + pet + 's' + '!'
    } else if (clause === 'perfect') {
      message += 'the perfect ' + pet + '!'
    } else if (clause === 'baby') {
      message += 'a tiny baby ' + pet + '!'
    }
    message += '\nCome back any time if you decide you want to try again!'
  } else {
    message += 'CONGRATULATIONS on adopting '
    if (clause === 'demon') {
      message += name + ' the demon ' + pet + '. You are a brave soul!'
    } else if (clause === '100') {
      message += ': \n'
      var i = 0
      for (i = 1; i <= 100; i++) {
        message += name + ' ' + i
        if (i !== 100) {
          message += ', '
          if (i % 5 === 0) {
            message += '\n'
          }
        } else {
          message += '.'
        }
      }
      message += '\n100 ' + pet + 's is going to be a handful!'
    } else if (clause === 'perfect') {
      message += name + ' the perfect ' + pet + '! Send me lots of pix!'
    } else if (clause === 'baby') {
      message += name + ' the tiny baby ' + pet + '! So cute!'
    }
  }
  alert(message)
}
