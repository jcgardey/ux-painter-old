function RefactoringView () {

}

RefactoringView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>" + this.getTitle() + "</h4>");
    $("#refactorings-sidebar").append("<div id='refactoring-form'></div>");
    $("#refactorings-sidebar").append("<button id='apply'>Apply</button><button id='cancel'>Back</button>");

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

