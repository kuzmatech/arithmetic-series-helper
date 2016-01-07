function main(a, d, n, sn) {
    var termcheck = document.getElementById("termcheck").checked;
    var sumcheck = document.getElementById("sumcheck").checked;
    var numcheck = document.getElementById("numcheck").checked;
    var answer = 0;
    //function handler
    if (termcheck === true) {
        try {
            //first term checking
            if (a == "" || a== null) throw "you have not entered the first term is needed to work out a specific term.";
            if (parseFloat(a)) throw "you have not entered a number for the first term.";
            //difference checking
            if (d == "" || d == null) throw "you have not entered the difference between terms this is needed to work out a specific term.";
            if (parseFloat(d)) throw "you have not entered a number for the difference between terms.";
            //n checking
            if (n == "" || n == null) throw "you have not entered N this is needed to work out a specific term.";
            if (parseFloat(n)) throw "you have not entered a number for N.";
        }
        catch(err) {
            alert("There was an error in your form, it seems " + err);
        }
        answer = term(a, d, n);
    }
    if (sumcheck === true) {
        try {
            //first term checking
            if (a == "" || a== null) throw "you have not entered the first term is needed to work out the sum of a series.";
            if (parseFloat(a)) throw "you have not entered a number for the first term.";
            //difference checking
            if (d == "" || d == null) throw "you have not entered the difference between terms this is needed to work out the sum of a series.";
            if (parseFloat(d)) throw "you have not entered a number for the difference between terms.";
            //n checking
            if (n == "" || n == null) throw "you have not entered N this is needed to work out the sum of a series.";
            if (parseFloat(n)) throw "you have not entered a number for N.";
        }
        catch(err) {
            alert("There was an error in your form, it seems " + err);
        }
        answer = sum(a, d, n);
    }
    if (numcheck === true) {
        try {
            //first term checking
            if (a == "" || a== null) throw "you have not entered the first term is needed to work out the number of terms in the sum of a series.";
            if (parseFloat(a)) throw "you have not entered a number for the first term.";
            //difference checking
            if (d == "" || d == null) throw "you have not entered the difference between terms this is needed to work out the number of terms in the sum of a series.";
            if (parseFloat(d)) throw "you have not entered a number for the difference between terms.";
            //sn checking
            if (sn == "" || sn == null) throw "you have not entered the sum of the series this is needed to work out the number of terms in the sum of a series.";
            if (parseFloat(n)) throw "you have not entered a number for the sum of the series.";
        }
        catch(err) {
            alert("There was an error in your form, it seems " + err);
        }
        answer = num(a, d, sn);
    }
    alert("The answer to your question is " + answer)
        
}

function term(a, d, n) {
    return a + d(n - 1);
}

function sum(a, d, n) {
    return (0.5(n)*((n-1)d));
}

function num(a, d, sn) {
    var x = (2*sn)/((2*a*d) - (d*d));
    return math.sqrt(x);
}