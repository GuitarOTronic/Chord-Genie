//*********   Populate picked root and chord type  ***************
var root = document.getElementsByClassName('note')
var displaySelectedChord = document.getElementById('selectedChord')
var selectedRoot = ''
var selectedChordType

for (var i = 0; i < root.length; i++) {
  root[i].addEventListener('click', function(event) {
    selectedRoot = event.target.innerText
    displaySelectedChord.innerText = selectedRoot

  })
}

var chordType = document.getElementsByClassName('chord')


for (var i = 0; i < chordType.length; i++) {
  chordType[i].addEventListener('click', function(event) {

    displaySelectedChord.innerText = selectedRoot + ' ' + event.target.innerText
    selectedChordType = event.target.innerText;
    console.log(selectedChordType);
    majorChord(selectedRoot)
  })
}


// ************   get chord tones   ***********************
var alphabet = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F',
  'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F',
  'F#/Gb', 'G',
]
var indexOfRoot

function majorChord(root) {
  indexOfRoot = alphabet.indexOf(root)
  console.log(indexOfRoot);

}
