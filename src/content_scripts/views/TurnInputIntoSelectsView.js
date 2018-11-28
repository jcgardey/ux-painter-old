function TurnInputIntoSelectsView () {

}

TurnInputIntoSelectsView.prototype = new RefactoringOnElementView();

TurnInputIntoSelectsView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Values</label>");
    $("#refactoring-form").append("<textarea id='select-values' rows='3'></textarea>");
    $('#autocomplete-values').prop('placeholder', "Values separated by commas");

};

TurnInputIntoSelectsView.prototype.setRefactoringArguments = function () {
    var values = $("#select-values").val().split(",");
    this.refactoring.setValues(values);
};
