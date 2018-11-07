function ProvideDefaultOptionView () {

}

ProvideDefaultOptionView.prototype = new RefactoringOnElementView();

ProvideDefaultOptionView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Default Option</label>");
    $("#refactoring-form").append("<input type='text' id='refactoring_default_option'/>");
};

ProvideDefaultOptionView.prototype.setRefactoringArguments = function () {
    var defaultOption = $("#refactoring_default_option").val();
    this.refactoring.setDefaultOption(defaultOption);
}