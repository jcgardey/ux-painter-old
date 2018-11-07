function RefactoringOnElementView() {

};

RefactoringOnElementView.prototype = new RefactoringView ();


RefactoringOnElementView.prototype.render = function () {
    RefactoringView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Target Element</label>");
    $("#refactoring-form").append("<p class='refactorings-label' id='element_xpath'>" + this.refactoring.getElementXpath() + "</p>");
};