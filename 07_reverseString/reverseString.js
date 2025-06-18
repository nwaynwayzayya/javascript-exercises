const reverseString = function(string) {
    let splitted = string.split("");
    let result = "";
    for (let i=splitted.length-1; i>=0; i--){
        result += splitted[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
