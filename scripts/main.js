//*********   Populate picked root and chord type  ***************
var learned = document.getElementById('learned')
var root = document.getElementsByClassName('note')
var displaySelectedChord = document.getElementById('selectedChord')
var selectedRoot = ''
var selectedChordType

renderLearnedChords()

for (var i = 0; i < root.length; i++) {
  root[i].addEventListener('click', function(event) {
    selectedRoot = event.target.innerText
    displaySelectedChord.innerText = selectedRoot

  })
}

var chordType = document.getElementsByClassName('chord')
//*********  Find index of root    *********
for (var i = 0; i < chordType.length; i++) {
  chordType[i].addEventListener('click', function(event) {

    displaySelectedChord.innerText = selectedRoot + ' ' + event.target.innerText
    selectedChordType = event.target.innerText;

    findIndexOfRoot(selectedRoot);

  })
}
// ************   get chord tones   ***********************
var alphabet = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F',
  'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F',
  'F#/Gb', 'G',
]
var indexOfRoot
var chordTones = []

function findIndexOfRoot(root) {
  indexOfRoot = alphabet.indexOf(root)

}
//**********  Major chord   ***********
var majChord = document.getElementById('major')

majChord.addEventListener('click', function() {
  majorChord(alphabet)
})

function majorChord(alph) {
  if (chordTones.length > 0) {
    chordTones = []
  }
  chordTones.push(alph[indexOfRoot].toLowerCase())

  chordTones.push(alph[indexOfRoot + 4].toLowerCase())
  chordTones.push(alph[indexOfRoot + 7].toLowerCase())

  displayCT.innerText = chordTones.join('-').toUpperCase()

}
//*************   Minor Chord    *******************

var minChord = document.getElementById('minor')
var displayCT = document.getElementById('displayCT')
minChord.addEventListener('click', function() {
  minorChord(alphabet)
  displayCT.innerText = chordTones.join('-').toUpperCase()

})

function minorChord(alph) {
  if (chordTones.length > 0) {
    chordTones = []
  }
  chordTones.push(alph[indexOfRoot].toLowerCase())
  chordTones.push(alph[indexOfRoot + 3].toLowerCase())
  chordTones.push(alph[indexOfRoot + 7].toLowerCase())

}
//*************  Chord Tone Display Button  ********
var lowerCaseCT = chordTones.join('')
var noteCircle = document.getElementsByClassName('circle')

var showChord = document.getElementById('showChord')

showChord.addEventListener('click', function() {

  for (let i = 0; i < noteCircle.length; i++) {
    noteCircle[i].style.visibility = 'hidden'
  }

  // populate major chord diagram

  for (let i = 0; i < chordTones.length; i++) {
    for (let j = 0; j < noteCircle.length; j++) {

      if (noteCircle[j].classList[1] === chordTones[i]) {
        noteCircle[j].style.visibility = 'visible'
      }
    }
  }

  // check to see if chords been added to local storage
  var chord = displaySelectedChord.innerText
  var storageLength = localStorage.length
  localStorage.setItem(storageLength, chord)

  for (let v = 0; v < storageLength; v++) {
    if (!learned.innerHTML.includes(localStorage.getItem(v))) {
      learned.innerHTML += " " + localStorage.getItem(v)
    }
  }
  renderLearnedChords();
})
//***** Chords you've learned so far**********


function renderLearnedChords() {
  var chord = displaySelectedChord.innerText
  var storageLength = localStorage.length
  localStorage.setItem(storageLength, chord)
  for (let v = 0; v < storageLength; v++) {
    if (!learned.innerHTML.includes(localStorage.getItem(v))) {
      learned.innerHTML += "<br>- " + localStorage.getItem(v)
    }
  }
}
