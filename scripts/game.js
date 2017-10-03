var playChord = document.getElementById('playChord')
var audioFiles = document.getElementsByClassName("audioFiles")

var audioObject = {
  amaj: 'assets/converted/amaj.mp3',
  adom7: "assets/converted/adom7.mp3",
  amaj7: "assets/converted/amaj7.mp3",
  amin: "assets/converted/amin.mp3",
  amin7: "assets/converted/amin7.mp3",
  asmaj: "assets/converted/asmaj.mp3",
  asmaj7: "assets/converted/asmaj7.mp3",
  asmin7: "assets/converted/asmin.mp3",
  asmin7: "assets/converted/asmin7.mp3"
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
  console.log(playChord.classList);
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

  if (document.getElementById('maj').checked && answer === 'maj') {
    response.innerText = 'You are Correct! Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('maj').checked = false
  } else if (document.getElementById('min').checked && answer === 'min') {
    response.innerText = 'You are Correct! Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('min').checked = false
  } else if (document.getElementById('min7').checked && answer === 'min7') {
    response.innerText = 'You are Correct! Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('min7').checked = false
  } else if (document.getElementById('dom7').checked && answer === 'dom7') {
    response.innerText = 'You are Correct! Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('dom7').checked = false
  } else if (document.getElementById('maj7').checked && answer === 'maj7') {
    response.innerText = 'You are Correct! Move on to the next chord!'
    randomIndex = undefined;
    count++
    answered = true
    document.getElementById('currentStreak').innerText = count;
    document.getElementById('maj7').checked = false
  } else {
    response.innerText = 'WRONG'
    count = 0
    document.getElementById('currentStreak').innerText = count;
  }
  if (answered === true) {
    answered = false;
    randomNum()
    randomChordType()
    var bestStreak = document.getElementById('bestStreak')

    playChord.className += ' btn-success'




  }

})
