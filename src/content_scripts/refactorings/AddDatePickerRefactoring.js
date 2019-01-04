function AddDatePickerRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
}

AddDatePickerRefactoring.prototype = new UsabilityRefactoringOnElement();
AddDatePickerRefactoring.prototype.constructor = AddDatePickerRefactoring;

AddDatePickerRefactoring.prototype.transform = function () {
    var anElement = $(this.getElement());
    if (typeof(anElement[0]) != "undefined") {
        datepickr(anElement[0], { dateFormat: "d/m/Y" })
    }
};

AddDatePickerRefactoring.prototype.getStyleElement = function () {
    return this.targetElement.parentNode;
};

AddDatePickerRefactoring.getName = function () {
    return "Add DatePicker";
};

AddDatePickerRefactoring.targetElements = function () {
    return "input[type='text']";
};

AddDatePickerRefactoring.getView = function () {
    return RefactoringOnElementView;
};