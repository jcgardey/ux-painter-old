function RefactoringOnElementView() {

};

RefactoringOnElementView.prototype = new RefactoringView ();


RefactoringOnElementView.prototype.render = function () {
    RefactoringView.prototype.render.call(this);
    var formGroup = $("<div class='refactorings-form-group'>")[0];
    $(formGroup).append("<label>Target Element</label>");
    $(formGroup).append("<p class='refactorings-label' id='element_xpath'>" + this.refactoring.getElementXpath() + "</p>");
    $("#refactoring-form").append(formGroup);

};