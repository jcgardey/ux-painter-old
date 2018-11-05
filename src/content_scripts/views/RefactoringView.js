function RefactoringView () {

}

RefactoringView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>" + this.getTitle() + "</h4>");
    $("#refactorings-sidebar").append("<div id='refactoring-form'></div>");
    $("#refactorings-sidebar").append("<button id='apply'>Apply</button><button id='cancel'>Back</button>");

    $("#cancel").on("click", function () {
       sidebar.show(RefactoringsListView);
    });
};

RefactoringView.prototype.onElementSelected = function (element) {
    this.refactoring.setElement(new XpathProcessor().getXPath(element));
};