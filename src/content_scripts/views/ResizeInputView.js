function ResizeInputView () {
    this.refactoring = new ResizeInputRefactoring();
}

ResizeInputView.prototype = new RefactoringOnElementView();

ResizeInputView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Input Size</label>");
    $("#refactoring-form").append("<input type='text' placeholder='width in pixels' id='input_size'/>");
};

ResizeInputView.prototype.getTitle = function () {
    return "Resize Input Refactoring";
};

ResizeInputView.prototype.setRefactoringArguments = function () {
    var inputSize = $("#input_size").val();
    this.refactoring.setInputSize(inputSize);
}