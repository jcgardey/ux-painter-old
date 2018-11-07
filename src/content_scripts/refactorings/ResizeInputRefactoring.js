function ResizeInputRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
    if (json) {
        this.inputSize = json.inputSize;
    }
}

ResizeInputRefactoring.prototype = new UsabilityRefactoringOnElement();
ResizeInputRefactoring.prototype.constructor = ResizeInputRefactoring;

ResizeInputRefactoring.prototype.transform = function () {
    var input = $(this.getElement());
    if (typeof(input[0]) != "undefined") {
        input.width(this.inputSize);
    }
};

ResizeInputRefactoring.prototype.setInputSize = function (inputSize) {
    this.inputSize = inputSize;
};

ResizeInputRefactoring.prototype.serialize = function () {
    var json = UsabilityRefactoringOnElement.prototype.serialize.call(this);
    json.inputSize = this.inputSize;
    return json;
};

ResizeInputRefactoring.getView = function () {
    return ResizeInputView;
};

ResizeInputRefactoring.getName = function () {
    return "Resize Input";
};

ResizeInputRefactoring.targetElements = function () {
    return "input[type='text'], input[type='password']";
};