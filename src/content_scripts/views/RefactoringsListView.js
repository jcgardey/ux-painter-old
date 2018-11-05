function RefactoringsListView () {
    this.refactorings = [RenameElementRefactoring, AddTooltipRefactoring, AddDatePickerRefactoring, AddAutocompleteRefactoring];
}

RefactoringsListView.prototype.getSelectedRefactoring = function (refactoringName) {
    return $(this.refactorings).filter(function (i, refactoringClass) {
        return refactoringClass.getName() == refactoringName;
    })[0];
}

RefactoringsListView.prototype.render = function () {
    var me = this;

    $("#refactorings-sidebar").append("<h4 style='text-align:center'>Available Refactorings</h4>");

    var list = $("<ul class='refactorings-list'></ul>")[0];
    $("#refactorings-sidebar").append(list);

    $.each(this.refactorings, function (i, refactoringClass) {
        $(list).append("<li><a data-refactoring='"+  refactoringClass + "'class='refactoring-item'>" + refactoringClass.getName() + "</a></li>");
    });

    $(".refactoring-item").on("click", function (e) {
        var refactoringClass = me.getSelectedRefactoring($(e.target).text());
        pageManager.enableElementSelection({
            "scrapperClass": "QuerySelectorScrapper",
            "targetElementSelector": refactoringClass.targetElements(),
            "onElementSelection": "onElementSelection",
            "justFullPath": true
        });
        pageManager.preventDomElementsBehaviour();
        sidebar.show(new SelectElementView(new refactoringClass()));
    });
};

