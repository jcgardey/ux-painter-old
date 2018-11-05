function AddAutocompleteRefactoring(elementXpath, values) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.values = values;
};

AddAutocompleteRefactoring.prototype = new UsabilityRefactoringOnElement();

AddAutocompleteRefactoring.prototype.constructor = AddAutocompleteRefactoring;

AddAutocompleteRefactoring.prototype.transform = function () {
    var anElement = $(this.getElement());
    if (typeof(anElement[0]) != "undefined") {
        new Awesomplete(anElement[0], { list: this.values });
    }
};

AddAutocompleteRefactoring.prototype.setValues = function (values) {
    this.values = values;
}

AddAutocompleteRefactoring.getName = function () {
    return "Add Autocomplete";
};

AddAutocompleteRefactoring.targetElements = function () {
    return "input[type='text']";
};

AddAutocompleteRefactoring.getView = function () {
    return AddAutocompleteView;
}