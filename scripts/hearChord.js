 var listen = document.getElementById('listen')

 var chordName
 listen.addEventListener('click', function() {
   var strCT = chordTones[0].toString()
   if (strCT.length > 1) {
     //gets chord in  root s min/maj   ex. fsmaj
     //for enharmonic spelling
     let wholeChord = displaySelectedChord.innerText.toString()
     let justChordType = wholeChord.slice(6, 9).toLowerCase()
     chordName = strCT[0] + 's' + justChordType;


   } else {
     //gets chord in  root s min/maj   ex. fsmaj
     //for generic spelling
     let wholeChord = displaySelectedChord.innerText.toString()
     let justChordType = wholeChord.slice(2, 5).toLowerCase()

     chordName = strCT[0] + justChordType;

   }
   //get the id
   let id = chordName
   //get correct audio file
   var audio = document.getElementById(id)
   //play dat audio
   audio.play()

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
 })
