function RefactoringView () {

}

RefactoringView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>" + this.getTitle() + "</h4>");
    $("#refactorings-sidebar").append("<div id='refactoring-form'></div>");
    $("#refactorings-sidebar").append("<a id='apply'>Apply</a>");
};