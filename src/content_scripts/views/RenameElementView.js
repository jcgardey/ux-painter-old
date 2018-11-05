function RenameElementView () {
    this.refactoring = new RenameElementRefactoring();
}

RenameElementView.prototype = new RefactoringOnElementView();

RenameElementView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>New Name</label>");
    $("#refactoring-form").append("<input type='text' id='element_name'/>");
};

RenameElementView.prototype.getTitle = function () {
    return "Rename Element Refactoring";
};

RenameElementView.prototype.setRefactoringArguments = function () {
    var newName = $("#element_name").val();
    this.refactoring.setNewName(newName);
}



