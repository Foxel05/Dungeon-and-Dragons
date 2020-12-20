var thisExpressions = [/something/, /something_else/, /and_something_else/];
var thisExpressions2 = [/else/, /something_else/, /and_something_else/];
var thisString = ["else"];

function matchInArray(string, expressions) {

    var len = expressions.length,
        i = 0;

    var strlen = thisString.length,
        j = 0;
        
    for (; j < strlen; j++) {
        for (; i < len; i++) {
            if (string[j].match(expressions[i])) {
                return true;
            }
        }
    }
    return false;

};

setTimeout(function() {
    console.log(matchInArray(thisString, thisExpressions));
    console.log(matchInArray(thisString, thisExpressions2));
}, 200)