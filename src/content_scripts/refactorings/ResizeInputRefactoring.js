function ResizeInputRefactoring(elementXpath, inputSize) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.inputSize = inputSize;
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

ResizeInputRefactoring.getView = function () {
    return ResizeInputView;
};

ResizeInputRefactoring.getName = function () {
    return "Resize Input";
};

ResizeInputRefactoring.targetElements = function () {
    return "input";
};