function FormatInputRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
    if (json) {
        this.formatString = json.formatString;
    }
}

FormatInputRefactoring.prototype = new UsabilityRefactoringOnElement();
FormatInputRefactoring.prototype.constructor = FormatInputRefactoring;

FormatInputRefactoring.prototype.transform = function () {

};

FormatInputRefactoring.prototype.setFormatString = function (formatString) {
    this.formatString = formatString;
};

FormatInputRefactoring.prototype.transform = function () {
    var anElement = $(this.getElement());
    anElement.mask(this.formatString);
};

FormatInputRefactoring.prototype.serialize = function () {
    var json = UsabilityRefactoringOnElement.UsabilityRefactoringOnElement.prototype.serialize.call(this);
    json.formatString = this.formatString;
    return json;
}

FormatInputRefactoring.getName = function () {
    return "Format Input";
};

FormatInputRefactoring.targetElements = function () {
    return "input[type='text']";
};

FormatInputRefactoring.getView = function () {
    return FormatInputView;
};
