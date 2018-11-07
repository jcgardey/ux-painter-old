function AddAutocompleteRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
    if (json) {
        this.values = json.values;
    }

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
};

AddAutocompleteRefactoring.prototype.serialize = function () {
    var json = UsabilityRefactoringOnElement.prototype.serialize.call(this);
    json.values = this.values;
    return json;
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