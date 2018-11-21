var budgetController = (function () {
    var x = 23;
    var add = function (a) {
        return x + a;
    };

    return {
        publicTest: function (b) {
            return add(b);
        }
    }
})();


//UI Controller
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };


    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();


var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };




    var ctrlAddItem = function () {

        // 1. Get the field input Data

        var input = UICtrl.getInput();
        console.log(input);
        console.log(i++);

        // 2. Add the item to budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on UI.


    };



    return {
        init: function () {
            i = 0;
            console.log('application has started');
            setupEventListeners();
        }
    };


})(budgetController, UIController);


controller.init();
