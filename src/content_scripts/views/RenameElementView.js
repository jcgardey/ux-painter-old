function RenameElementView () {
    this.refactoring = new RenameElementRefactoring();
}

RenameElementView.prototype = new RefactoringOnElementView();

RenameElementView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>New Name</label>");
    $("#refactoring-form").append("<input type='text' id='element_name'/>");

    var me = this;

    $("#apply").on("click", function () {
        var newName = $("#element_name").val();
        me.refactoring.setNewName(newName);
        me.refactoring.execute();
        sidebar.show(new RefactoringsListView ());
    });
};

RenameElementView.prototype.getTitle = function () {
    return "Rename Element Refactoring";
};



