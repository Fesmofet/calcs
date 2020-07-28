// var starter = {
//     checkInput: checkInput,
//     generateModal: generateModal,
//     closeModalWindow: closeModalWindow,
//     convertLanguageTextToNumber: convertLanguageTextToNumber
//
// };
// module.exports = starter;

function calculate(inputNumber, convertFrom, convertTo){
    var result;
    let rules = [
        {from: "versts", to: "versts", caf: "1"},
        {from: "yards", to: "yards", caf: "1"},
        {from: "miles", to: "miles", caf: "1"},
        {from: "foots", to: "foots", caf: "1"},
        {from: "meters", to: "meters", caf: "1"},
        {from: "versts", to: "meters", caf: "1066.8"},
        {from: "versts", to: "yards",  caf: "1166.6667"},
        {from: "versts", to: "miles",  caf: "0.662878788"},
        {from: "versts", to: "foots",  caf: "3500"},
        {from: "meters", to: "versts", caf: "0.000937382827"},
        {from: "meters", to: "yards", caf: "1.09361329999999984"},
        {from: "meters", to: "miles", caf: "0.000621371192"},
        {from: "meters", to: "foots", caf: "3.281"},
        {from: "yards", to: "versts", caf: "0.000857142857"},
        {from: "yards", to: "miles", caf: "0.000568181818"},
        {from: "yards", to: "foots", caf: "3"},
        {from: "yards", to: "meters", caf: "0.9144"},
        {from: "miles", to: "yards", caf: "1760"},
        {from: "miles", to: "versts",  caf: "1.50857143"},
        {from: "miles", to: "foots", caf: "5280"},
        {from: "miles", to: "meters", caf: "1609.344"},
        {from: "foots", to: "yards", caf: "0.333333333"},
        {from: "foots", to: "miles", caf: "0.000189393939"},
        {from: "foots", to: "versts",  caf: "0.000285714286"},
        {from: "foots", to: "meters", caf: "0.3048"},
    ];
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].from === convertFrom && rules[i].to === convertTo) {
            result = inputNumber * rules[i].caf;
            result = result.toFixed(4);
        }
    }
    return result;
}

// export var logic = {
//     calculate: calculate
// };

module.exports = {
     calculate: calculate
 };