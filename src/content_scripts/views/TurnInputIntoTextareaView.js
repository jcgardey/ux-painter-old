function TurnInputIntoTextareaView () {

}

TurnInputIntoTextareaView.prototype = new RefactoringOnElementView();

TurnInputIntoTextareaView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Text area size</label>");
    $("#refactoring-form").append("<input type='text' id='text_size' placeholder='rows,columns'/>");
};

TurnInputIntoTextareaView.prototype.setRefactoringArguments = function () {
    this.refactoring.setSize(document.getElementById("text_size").value);
};