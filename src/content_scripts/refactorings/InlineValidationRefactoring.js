function InlineValidationRefactoring(json) {
    AddFormValidationRefactoring.call(this, json);
}

InlineValidationRefactoring.prototype = new AddFormValidationRefactoring();
InlineValidationRefactoring.prototype.constructor = InlineValidationRefactoring;

InlineValidationRefactoring.prototype.transform = function () {
    var inputStates = {};
    for (i = 0; i < this.requiredInputXpaths.length; i++) {
        inputStates[this.requiredInputXpaths[i]] = false;
        var input = new XPathInterpreter().getSingleElementByXpath(this.requiredInputXpaths[i], document.body);
        input.setAttribute("data-original-border-color",input.style.borderColor);
        input.addEventListener("blur", function (e) {
            if (!e.target || !e.target.value) {
                e.target.style.borderColor = "rgb(255,0,0)";
                inputStates[new XPathInterpreter().getPath(e.target, document.body)] = false;
            }
            else {
                e.target.style.borderColor = e.target.getAttribute("data-original-border-color");
                inputStates[new XPathInterpreter().getPath(e.target, document.body)] = true;
            }
        });
    }
    var formElement = this.getElement();
    formElement.addEventListener("submit", function (e) {
        invalidInput = false;
        Object.keys(inputStates).forEach(function (key) {
           if (!inputStates[key]) {
               invalidInput = true;
               return false;
           }
        });
        if (!invalidInput) {
            formElement.submit();
        }

    });
};


InlineValidationRefactoring.getName = function () {
    return "Inline Validation";
}

InlineValidationRefactoring.targetElements = function () {
    return "form";
};

InlineValidationRefactoring.getView = function () {
    return AddFormValidationView;
};