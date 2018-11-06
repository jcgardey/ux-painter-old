function TurnAttributeIntoLinkView () {

}

TurnAttributeIntoLinkView.prototype = new RefactoringOnElementView();

TurnAttributeIntoLinkView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);
    $("#refactoring-form").append("<label>URL</label>");
    $("#refactoring-form").append("<input type='text' id='refactoring_url'/>");
};

TurnAttributeIntoLinkView.prototype.setRefactoringArguments = function () {
    var url = $("#refactoring_url").val();
    this.refactoring.setTargetURL(url);
}