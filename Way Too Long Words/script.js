function wayTooLongWords(word){
    let wFirst = word[0], wLast = word[word.length - 1];
    let len = word.length - 2;
    var res = wFirst + len.toString() + wLast;
    return res;
}