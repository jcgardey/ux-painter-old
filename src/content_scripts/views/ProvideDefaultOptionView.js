function ProvideDefaultOptionView () {

}

ProvideDefaultOptionView.prototype = new RefactoringOnElementView();

ProvideDefaultOptionView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Default Option</label>");

    var options = $(this.refactoring.getElement()).find("option");
    $("#refactoring-form").append("<select type='text' id='refactoring_default_option'></select>");
    $("#refactoring_default_option").append("<option value='-1'>No Default Option</option>");
    $("#refactoring_default_option").append(options.clone());
};

ProvideDefaultOptionView.prototype.setRefactoringArguments = function () {
    if ($("#refactoring_default_option").val() == "-1") {
        this.refactoring.setDefaultOption(-1);
    }
    else {
        var defaultOptionIndex = $('#refactoring_default_option').find("option:selected").index();
        this.refactoring.setDefaultOption(defaultOptionIndex);
    }
};