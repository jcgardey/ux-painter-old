function RefactoringOnElementView() {

};

RefactoringOnElementView.prototype = new RefactoringView ();


RefactoringOnElementView.prototype.render = function () {
    RefactoringView.prototype.render.call(this);
    $("#refactoring-form").append("<p>Target Element: <span id='element_xpath'>" + this.refactoring.getElementXpath() + "</span></p>");
};