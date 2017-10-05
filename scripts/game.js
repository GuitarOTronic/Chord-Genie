var playChord = document.getElementById('playChord')

var bestStreakEver = JSON.parse(localStorage.getItem("bestStreak"))
//sets best streak ever from local storage
document.getElementById('bestStreak').innerText = bestStreakEver



var audioObject = {
  amaj: 'assets/converted/amaj.mp3',
  adom7: "assets/converted/adom7.mp3",
  amaj7: "assets/converted/amaj7.mp3",
  amin: "assets/converted/amin.mp3",
  amin7: "assets/converted/amin7.mp3",

  asmaj: "assets/converted/asmaj.mp3",
  asmaj7: "assets/converted/asmaj7.mp3",
  asmin7: "assets/converted/asmin.mp3",
  asmin7: "assets/converted/asmin7.mp3",

  bmaj: "assets/converted/bmaj.mp3",
  bmaj7: "assets/converted/bmaj7.mp3",
  bmin: "assets/converted/bmin.mp3",
  bmin7: "assets/converted/bmin7.mp3",

  cmaj: "assets/converted/cmaj.mp3",
  cdom7: "assets/converted/cdom7.mp3",
  cmaj7: "assets/converted/cmaj7.mp3",
  cmin: "assets/converted/cmin.mp3",
  cmin7: "assets/converted/cmin7.mp3",

  csmaj: "assets/converted/csmaj.mp3",
  csdom7: "assets/converted/csdom7.mp3",
  csmaj7: "assets/converted/csmaj7.mp3",
  csmin: "assets/converted/csmin.mp3",
  csmin7: "assets/converted/csmin7.mp3",

  dmaj: "assets/converted/dmaj.mp3",
  ddom7: "assets/converted/ddom7.mp3",
  dmaj7: "assets/converted/dmaj7.mp3",
  dmin: "assets/converted/dmin.mp3",
  dmin7: "assets/converted/dmin7.mp3",

  dsmaj: "assets/converted/dsmaj.mp3",
  dsdom7: "assets/converted/dsdom7.mp3",
  dsmaj7: "assets/converted/dsmaj7.mp3",
  dsmin: "assets/converted/dsmin.mp3",
  dsmin7: "assets/converted/dsmin7.mp3",

  emaj: "assets/converted/emaj.mp3",
  edom7: "assets/converted/edom7.mp3",
  emaj7: "assets/converted/emaj7.mp3",
  emin: "assets/converted/emin.mp3",
  emin7: "assets/converted/emin7.mp3",

  fmaj: "assets/converted/fmaj.mp3",
  fdom7: "assets/converted/fdom7.mp3",
  fmaj7: "assets/converted/fmaj7.mp3",
  fmin: "assets/converted/fmin.mp3",
  fmin7: "assets/converted/fmin7.mp3",

  fsmaj: "assets/converted/fsmaj.mp3",
  fsdom7: "assets/converted/fsdom7.mp3",
  fsmaj7: "assets/converted/fsmaj7.mp3",
  fsmin: "assets/converted/fsmin.mp3",
  fsmin7: "assets/converted/fsmin7.mp3",

  gmaj: "assets/converted/gmaj.mp3",
  gdom7: "assets/converted/gdom7.mp3",
  gmaj7: "assets/converted/gmaj7.mp3",
  gmin: "assets/converted/gmin.mp3",
  gmin7: "assets/converted/gmin7.mp3",

  gsmaj: "assets/converted/gsmaj.mp3",
  gsdom7: "assets/converted/gsdom7.mp3",
  gsmaj7: "assets/converted/gsmaj7.mp3",
  gsmin: "assets/converted/gsmin.mp3",
  gsmin7: "assets/converted/gsmin7.mp3"
}
var randomIndex

var randomNum = function() {
  min = 0;
  max = Object.keys(audioObject).length;
  randomIndex = Math.floor(Math.random() * (max));
}

var answer

//checks for type of chord and sets answer
var randomChordType = function() {
  if (Object.keys(audioObject)[randomIndex].includes('s')) {
    answer = Object.keys(audioObject)[randomIndex].slice(2)

  } else {
    answer = Object.keys(audioObject)[randomIndex].slice(1)

  }
}
//Object.keys(audioObject)[randomIndex]


//plays quiz chord.
//gets chord from the randomIndex
playChord.addEventListener('click', function() {
  //console.log(playChord.classList);
  if (playChord.classList.contains('btn-success')) {
    playChord.classList.remove('btn-success')
  }
  if (randomIndex === undefined) {
    randomNum()
    randomChordType()
  }

  console.log(answer);

  var getChordAudio = document.createElement('audio')
  getChordAudio.src = audioObject[Object.keys(audioObject)[randomIndex]]
  getChordAudio.play()
})
var count = 0
var answered = false;
var response = document.getElementById('response')
//check for correct answer
var userAnswer = document.getElementById('gameChoicesForm')
userAnswer.addEventListener('submit', function(event) {
  event.preventDefault()
  //checks for correct answer
  if (document.getElementById('maj').checked && answer === 'maj') {
    //congratulates user on a correct guess
    response.innerText = 'You are Correct! \n Move on to the next chord!'
    // resets random index so a new chord is generated
    randomIndex = undefined;
    //adds to the current streak
    count++
    //sets answer to true for use with the local storage
    answered = true
    //sets currentStreak to new count
    document.getElementById('currentStreak').innerText = count;
    //unselects radio
    document.getElementById('maj').checked = false
  } else if (document.getElementById('min').checked && answer === 'min') {
    response.innerText = 'You are Correct! \n Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('min').checked = false
  } else if (document.getElementById('min7').checked && answer === 'min7') {
    response.innerText = 'You are Correct! \n Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('min7').checked = false
  } else if (document.getElementById('dom7').checked && answer === 'dom7') {
    response.innerText = 'You are Correct! \n Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('dom7').checked = false
  } else if (document.getElementById('maj7').checked && answer === 'maj7') {
    response.innerText = 'You are Correct! \n Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('maj7').checked = false
    response.innerText = 'You are Correct! \n Move on to the next chord!'
  } else {
    response.innerText = 'WRONG'
    count = 0
    document.getElementById('currentStreak').innerText = count;
  }

  //determines if user answers, then resets game as well as currentStreak
  if (answered === true) {
    answered = false;
    randomNum()
    randomChordType()
    var bestStreak = document.getElementById('bestStreak')
    //turns play chord button green!
    playChord.className += ' btn-success'
    //var streaky = JSON.parse(localStorage.getItem("bestStreak"))

    //sets local storage to best streak ever
    if (!localStorage.getItem('bestStreak')) {
      localStorage.setItem("bestStreak", JSON.stringify(document.getElementById('currentStreak').innerText))
      //var streaky = JSON.parse(localStorage.getItem("bestStreak"))

      //sets new high streak
    } else if (Number(JSON.parse(localStorage.getItem('bestStreak'))) < document.getElementById('currentStreak').innerText) {
      localStorage.setItem("bestStreak", JSON.stringify(document.getElementById('currentStreak').innerText))
      document.getElementById('bestStreak').innerText = document.getElementById('currentStreak').innerText
      alert('Great job! You beat your high score!')
    }


  }

})
