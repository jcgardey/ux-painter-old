function AddTooltipView() {
    this.refactoring = new AddTooltipRefactoring();
}

AddTooltipView.prototype = new RefactoringOnElementView();

AddTooltipView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>Tooltip</label>");
    $("#refactoring-form").append("<input type='text' id='tooltip'/>");

    var me = this;

    $("#apply").on("click", function () {
        var tooltip = $("#tooltip").val();
        me.refactoring.setTooltipName(tooltip);
        me.refactoring.execute();
        sidebar.show(RefactoringsListView);
    });

};

AddTooltipView.prototype.getTitle = function () {
    return "Add Tooltip";
}