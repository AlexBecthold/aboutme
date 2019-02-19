function pigLatin(str) {
    var vowel = str.match(/[aeiou]/);
    var vowelPosition = str.indexOf(vowel);

    if(vowelPosition > 0) {
        return str.slice(vowelPosition) + str.slice(0, vowelPosition) + "ay";
    }
    else {
        return str + "way";
    }
}

pigLatin("Water");