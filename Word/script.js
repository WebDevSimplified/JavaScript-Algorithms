/* 
From CodeForces - Problem

Vasya is very upset that many people on the Net mix uppercase and lowercase letters in one word. 

That's why he decided to invent an extension for his favorite browser that would change the letters' register in every word so that it either only consisted of lowercase letters or,

vice versa, only of uppercase ones. At that as little as possible letters should be changed in the word. 

For example, the word HoUse must be replaced with house, and the word ViP — with VIP. If a word contains an equal number of uppercase and lowercase letters, 

you should replace all the letters with lowercase ones. For example, maTRIx should be replaced by matrix. Your task is to use the given method on one given word.
*/

function Word(word) {
 var lwrLetter = [], uprLetter = [];
 let letter = word.split('');
 let upperCaseLetters = word.toUpperCase().split('');
 for(var i = 0; i < letter.length; i++) {
    if(letter[i] === upperCaseLetters[i]) {
        uprLetter.push(letter[i]);
    } else {
        lwrLetter.push(letter[i]);
    }
 }
 if (lwrLetter.length > uprLetter.length) {
    return word.toLowerCase();
 } else if (lwrLetter.length < uprLetter.length) {
     return word.toUpperCase();
 } else {
     return word.toLowerCase();
 }
}
