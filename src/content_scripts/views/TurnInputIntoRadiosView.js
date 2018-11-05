function TurnInputIntoRadiosView() {
    this.refactoring = new TurnInputIntoRadiosView();
}

TurnInputIntoRadiosView.prototype = new RefactoringOnElementView();

TurnInputIntoRadiosView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Values</label>");
    $("#refactoring-form").append("<textarea id='radio-values' rows='3'></textarea>");
    $('#autocomplete-values').prop('placeholder', "Values separated by commas");

};

TurnInputIntoRadiosView.prototype.getTitle = function () {
    return "Turn Input into Radios";
};

TurnInputIntoRadiosView.prototype.setRefactoringArguments = function () {
    var values = $("#radio-values").val().split(",");
    this.refactoring.setValues(values);
};