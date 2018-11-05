function AddAutocompleteView() {
    this.refactoring = new AddTooltipRefactoring();
}

AddAutocompleteView.prototype = new RefactoringOnElementView();

AddAutocompleteView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Values</label>");
    $("#refactoring-form").append("<textarea id='autocomplete-values' rows='3'></textarea>");
    $('#autocomplete-values').prop('placeholder', "Values separated by commas");

};

AddAutocompleteView.prototype.getTitle = function () {
    return "Add Tooltip";
};

AddAutocompleteView.prototype.setRefactoringArguments = function () {
    var values = $("#autocomplete-values").val().split(",");
    console.log(values);
    this.refactoring.setValues(values);
};