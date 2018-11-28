function FormatInputView() {
    
}

FormatInputView.prototype = new RefactoringOnElementView();

FormatInputView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Format</label>");
    $("#refactoring-form").append("<input type='text' id='input-format'/>");
    $("#refactoring-form").append("<p>9: digit, </p>")


};

FormatInputView.prototype.setRefactoringArguments = function () {
    this.refactoring.setFormatString(document.getElementById("input-format").value);
};