function RefactoringView () {
}

RefactoringView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>" + this.refactoring.constructor.getName() + "</h4>");
    $("#refactorings-sidebar").append("<div id='refactoring-form'></div>");

    var formGroup = $("<div class='refactorings-form-group'>")[0];
    $(formGroup).append("<div class='refactoring-buttons'><button id='apply'>Apply</button></div>");
    $(formGroup).append("<div class='refactoring-buttons'><button id='cancel'>Back</button></div>");
    $("#refactorings-sidebar").append(formGroup);

    var me = this;
    $("#apply").on("click", function () {
        me.setRefactoringArguments();
        me.refactoring.execute();
        sidebar.show(new RefactoringsListView());
    });


    $("#cancel").on("click", function () {
       sidebar.show(new RefactoringsListView());
    });
};

RefactoringView.prototype.setRefactoring = function (refactoring) {
    this.refactoring = refactoring;
};

RefactoringView.prototype.setRefactoringArguments = function () {

}

