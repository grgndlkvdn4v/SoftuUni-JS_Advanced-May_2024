function calculator() {

    let sumButton = document.getElementById('sumButton');
    let subtractButton = document.getElementById('subtractButton');

    let selector1 = 'input#num1';
    let selector2 = 'input#num2';
    let resultSelector = 'input#result';

    
    return {
        init: function (selector1, selector2, resultSelector) {
            console.log('init');
            let numOneRef = document.querySelector(selector1);
            let numTwoRef = document.querySelector(selector2);
            let resultRef = document.querySelector(resultSelector);

            let initObj = {numOneRef, numTwoRef, resultRef}
            // console.log(initObj.numOneRef);
            
            return initObj
        },


        add: function () {
            console.log('add');
            
            console.log(calculator.init);
        },

        subtract: function () {
            console.log('subtract');
        }
    }


}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');