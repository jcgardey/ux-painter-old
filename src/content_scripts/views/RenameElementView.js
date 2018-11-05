function RenameElementView () {
    this.refactoring = new RenameElementRefactoring();
}

RenameElementView.prototype = new RefactoringView();

RenameElementView.prototype.render = function () {
    RefactoringView.prototype.render.call(this);
    $("#refactoring-form").append("<label>New Name</label>");
    $("#refactoring-form").append("<input type='text' id='element_name'/>");

    var me = this;

    $("#apply").on("click", function () {
        var newName = $("#element_name").val();
        me.refactoring.setNewName(newName);
        me.refactoring.execute();
        sidebar.show(RefactoringsListView);
    });
};

RenameElementView.prototype.getTitle = function () {
    return "Rename Element Refactoring";
};



