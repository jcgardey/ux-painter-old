function AddFormValidationRefactoring(formXpath, requiredInputXpaths) {
    UsabilityRefactoringOnElement.call(this, formXpath);
    this.requiredInputXpaths = requiredInputXpaths;
}

AddFormValidationRefactoring.prototype = new UsabilityRefactoringOnElement();
AddFormValidationRefactoring.prototype.constructor = AddFormValidationRefactoring;

AddFormValidationRefactoring.prototype.transform = function () {
    var formElement = $(this.getElement());
    var me = this;
    if (typeof(formElement[0]) != "undefined") {
        formElement.submit(function(e) {
            $.each(me.requiredInputXpaths, function(i, xpath) {
                    var input = new XPathInterpreter().getSingleElementByXpath(xpath, document.body);
                    if (!input || !$(input).val()) {
                        $(input).css("border-color", "rgb(255,0,0)");
                        e.preventDefault();
                        return false;
                    }
                });
        });

    }
};

AddFormValidationRefactoring.prototype.setRequiredInputs = function (requiredInputs) {
    this.requiredInputXpaths = requiredInputs;
}

AddFormValidationRefactoring.getName = function () {
    return "Add Form Validation";
}

AddFormValidationRefactoring.getView = function () {
    return AddFormValidationView;
}

AddFormValidationRefactoring.targetElements = function () {
    return "form";
}
