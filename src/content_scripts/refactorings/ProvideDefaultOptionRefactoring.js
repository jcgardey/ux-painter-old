function ProvideDefaultOptionRefactoring(elementXpath, defaultOptionIndex) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.defaultOptionIndex = defaultOptionIndex;
}

ProvideDefaultOptionRefactoring.prototype = new UsabilityRefactoringOnElement();
ProvideDefaultOptionRefactoring.prototype.constructor = ProvideDefaultOptionRefactoring;

ProvideDefaultOptionRefactoring.prototype.transform = function () {
    var element = $(this.getElement());
    if (typeof(element[0]) != "undefined") {
        element.prop("selectedIndex", this.defaultOptionIndex);
    }
};

ProvideDefaultOptionRefactoring.prototype.setDefaultOption = function (option) {
    this.defaultOptionIndex = option;
};

ProvideDefaultOptionRefactoring.prototype.getSelectionElementEvent = function () {
    return "mousedown";
}


ProvideDefaultOptionRefactoring.getName = function () {
    return "Provide Default Option";
};

ProvideDefaultOptionRefactoring.getView = function () {
    return ProvideDefaultOptionView;
};

ProvideDefaultOptionRefactoring.targetElements = function () {
    return "select";
}

