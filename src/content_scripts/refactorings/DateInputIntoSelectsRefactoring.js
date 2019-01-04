function DateInputIntoSelectsRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
}

DateInputIntoSelectsRefactoring.prototype = new UsabilityRefactoringOnElement();
DateInputIntoSelectsRefactoring.prototype.constructor = DateInputIntoSelectsRefactoring;

DateInputIntoSelectsRefactoring.prototype.transform = function () {
    var dateInput = $(this.getElement());
    if (typeof(dateInput[0]) != "undefined") {
        var submitFieldName = dateInput.attr("name");
        dateInput.attr("name", "");
        dateInput.dateDropdowns({ submitFieldName: submitFieldName });
    }
};

DateInputIntoSelectsRefactoring.prototype.getStyleElement = function () {
    return this.targetElement.parentNode;
};

DateInputIntoSelectsRefactoring.getName = function () {
    return "Date Input into Selects";
};

DateInputIntoSelectsRefactoring.getView = function () {
    return RefactoringOnElementView;
};

DateInputIntoSelectsRefactoring.targetElements = function () {
    return "input[type='text']";
}


