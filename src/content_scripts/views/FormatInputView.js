function FormatInputView() {
    
}

FormatInputView.prototype = new RefactoringOnElementView();

FormatInputView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Input Format</label>");
    $("#refactoring-form").append("<input type='text' id='input-format' placeholder='e.g. 9999-99-99 for Date'/>");
    $("#refactoring-form").append("<p class='bold' style='margin: 10px 0px'>Options</p>");
    $("#refactoring-form").append("<ul><li>0: {pattern: /\\d/}</li><li>9: {pattern: /\\d/, optional:true}</li>" +
        "<li>#: {pattern: /\\d/, recursive: true}</li>" +
        "<li>A: {pattern: /[a-zA-Z0-9]/}</li>" +
        "<li>S: {pattern: /[a-zA-Z]/}</li>");
};

FormatInputView.prototype.setRefactoringArguments = function () {
    this.refactoring.setFormatString(document.getElementById("input-format").value);
};