function LinkToTopView() {
    this.refactoring = new LinkToTopRefactoring();
}

LinkToTopView.prototype = new RefactoringView();


LinkToTopView.prototype.getTitle = function () {
    return "Link to Top";
};