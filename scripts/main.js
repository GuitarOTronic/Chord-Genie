var root = document.getElementsByClassName('note')
var displaySelectedChord = document.getElementById('selectedChord')
var selectedRoot = ''
var selectedChordType

for (var i = 0; i < root.length; i++) {
  root[i].addEventListener('click', function(event) {
    selectedRoot = event.target.innerText
    displaySelectedChord.innerText = selectedRoot
    console.log(selectedRoot);
  })
}

var chordType = document.getElementsByClassName('chord')
var chordCount = 0

for (var i = 0; i < chordType.length; i++) {
  chordType[i].addEventListener('click', function(event) {

    displaySelectedChord.innerText = selectedRoot + ' ' + event.target.innerText
    selectedChordType = event.target.innerText;
    console.log(selectedChordType);
  })
}
