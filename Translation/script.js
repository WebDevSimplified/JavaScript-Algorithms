/*
From CodeForces - 
The translation from the Berland language into the Birland language is not an easy task. Those languages are very similar: a berlandish word differs from a birlandish word with the same meaning a little: it is spelled (and pronounced) reversely. For example, a Berlandish word code corresponds to a Birlandish word edoc. However, it's easy to make a mistake during the «translation». Vasya translated word s from Berlandish into Birlandish as t. Help him: find out if he translated the word correctly.

Input
The first line contains word s, the second line contains word t. The words consist of lowercase Latin letters. The input data do not consist unnecessary spaces. The words are not empty and their lengths do not exceed 100 symbols.

Output
If the word t is a word s, written reversely, print YES, otherwise print NO.
*/

function Translation(t,s) {
    let letters = [];
    for(var i = t.length - 1; i >= 0; i--) {
        letters.push(t[i]);
    }

    let reverse_word_withComma =  letters.join();
    let reverse_word = reverse_word_withComma.replaceAll(',','');
    if(reverse_word == s) {
        return "YES";
    } else {
        return "NO";
    }
}