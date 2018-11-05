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
        console.log("fired");
        var newName = $("#element_name").val();
        me.refactoring.setNewName(newName);
        me.refactoring.execute();
    });
};

RenameElementView.prototype.getTitle = function () {
    return "Rename Element Refactoring";
};

RenameElementView.prototype.onElementSelected = function (element) {
    this.refactoring.setElement(new XpathProcessor().getXPath(element));
};

