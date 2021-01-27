let str1 = "Uwielbiam JavaScript";
let str2 = "Jestem świetnym programistą";

function longerString(string1, string2)
{
    let result = "Stringi mają tę samą długość."
    
    if (string1.length > string2.length) {
        result = "Dłuższy string: " + string1;
    }
    else if (string1.length < string2.length) {
        result =  "Dłuższy string: " + string2;
    }

    return result;
}

console.log(longerString(str1, str2));