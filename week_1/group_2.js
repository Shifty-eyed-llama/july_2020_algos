// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
    var firstArr = []
    var strArr = string.split(' ');

    for (var i = 0; i < strArr.length; i++){
        var word = strArr[i];
        var first = word[0];  
        firstArr.push(first)
    }
    
    return firstArr.join('').toUpperCase()
}

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
    
    for(var i = 0; i < string.length/2; i++){
        var temp = string[i];
        string[i] = string[string.length -1-i];
        string[string.length -1 -i] = temp;
    }

    return string
}

function revStr(inStr) {
    let rev = "";
    for (let i = inStr.length - 1; i >= 0; i--) {
        rev = rev + inStr[i];
    }
    return rev;
}

function parensValid(string){
    var open = 0;
    var closed = 0
    for(var i = 0; i < string.length; i++){
        if(string.indexOf('(') == 0){
            open++
        }
        string.indexOf('(')
    }
    if('(' > ')' || ')' > '('){
        return false
    }

}

function parensValid3(string){

    for(var i = 0; i < string.length; i++){
        if(string[i] == '('){
            for(var j = i; j < string.length -i; j++){
                if(string.indexOf(')') != -1){
                    continue
                } else{
                    return false
                }
            }
        } else{
            continue
        }
    }
}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()()()" => TRUE
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "())(()" => FALSE
function parensValid(inStr) {
    // EARLY EXIT / CONSIDERING ANY EDGE CASES
    if (inStr.length % 2 != 0 || inStr[0] != "(") {
        return false;
    }
    openParens = ["("];
    let firstOpenParen = [];
    firstOpenParen.push(inStr[0]);

    for (let i = 1; i < inStr.length; i++) {
        if (openParens.includes(inStr[i])) {
            firstOpenParen.push(inStr[i]);

            //   console.log("firstOpenParen: ", firstOpenParen);
        } else {
            firstOpenParen.shift();
            //   closeParen.push(inStr[i]);
            //   console.log("close Paren: ", closeParen);
        }
    }
    return firstOpenParen.length == 0;
}
console.log(parensValid("'())(()'"));

function bracesValid(inString) {
    let openBrace = ["(","{","["]
    if (inString.length % 2 != 0) {
        return false
    }
    if (!openBrace.includes(inString[0])) {
        return false
    }

    for (let i = 1; i < inStr.length; i++){
        
    }

}
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


function isPalindrome(string){
    for(var i = 0; i < string.length/2; i++){
        if(string[i] != string[string.length -1-i]){
            return false
        }
    }
return true
}


function isPalindrome2(inStr) {
    let strL = inStr.length - 1;
    // if (inStr[0] !== inStr[strL]) {
    //     return false
    // }

    for (let i = 0; i < inStr.length / 2; i++) {
        if (inStr[i] != inStr[strL]) {
            return false;
        }
        strL = strL - 1;
    }
    return true;
}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE

function isAnagram(string1, string2) {
    
    if(string1.length != string2.length){
        return false
    }
    var letters = []
    for(var i = 0; i < string1.length; i++){
        letters.push(string1[i])
    }
    for(var j = 0; j < string2.length; j++){
        if(letters.indexOf(string2[j]) != -1){
            continue
        } else {
            return false
        }
    }
    
    console.log(letters)
    return true
}

function isAnagram2(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let letters = {};
    let letters2 = {};
    for (let i = 0; i < str1.length; i++) {
        if (Object.keys(letters).includes(str1[i])) {
            letters[str1[i]] += 1;
        } else {
            letters[str1[i]] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (Object.keys(letters2).includes(str1[i])) {
            letters2[str1[i]] += 1;
        } else {
            letters2[str1[i]] = 1;
        }
    }
    
    for (let i = 0; i < str2.length; i++) {
        if (letters[str2[i]] !== letters2[str2[i]]) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram2("LISTEN", "SILENT"));
console.log(isAnagram2("LISTEN", "SILENZ"));

// HINT: YOU WANT TO USE A DICTIONARY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//