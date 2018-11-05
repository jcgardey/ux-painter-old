function AddTooltipView() {
    this.refactoring = new AddTooltipRefactoring();
}

AddTooltipView.prototype = new RefactoringOnElementView();

AddTooltipView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Tooltip</label>");
    $("#refactoring-form").append("<input type='text' id='tooltip'/>");
};

AddTooltipView.prototype.getTitle = function () {
    return "Add Tooltip";
};

AddTooltipView.prototype.setRefactoringArguments = function () {
    var tooltip = $("#tooltip").val();
    this.refactoring.setTooltipName(tooltip);
};