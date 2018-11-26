function RefactoringsListView () {
    this.refactorings = [RenameElementRefactoring, AddTooltipRefactoring,
        AddDatePickerRefactoring, AddAutocompleteRefactoring,
        TurnInputIntoRadiosRefactoring, ResizeInputRefactoring, LinkToTopRefactoring, DateInputIntoSelectsRefactoring,
    TurnAttributeIntoLinkRefactoring, AddProcessingPageRefactoring, ProvideDefaultOptionRefactoring, AddFormValidationRefactoring, TurnInputIntoSelectsRefactoring];
}

RefactoringsListView.prototype.getSelectedRefactoring = function (refactoringName) {
    return $(this.refactorings).filter(function (i, refactoringClass) {
        return refactoringClass.getName() == refactoringName;
    })[0];
};

RefactoringsListView.prototype.render = function () {
    var me = this;

    $("#refactorings-sidebar").append("<h4 style='text-align:center'>Available Refactorings</h4>");

    var list = $("<ul class='refactorings-list'></ul>")[0];
    $("#refactorings-sidebar").append(list);

    $.each(this.refactorings, function (i, refactoringClass) {
        $(list).append("<li><a data-refactoring='"+  refactoringClass + "'class='refactoring-item'>" + refactoringClass.getName() + "</a></li>");
    });

    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><button type='button' id='save-version'>Save Version</button></div>");
    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><button type='button' id='refactoring-back'>Back</button></div>");

    $(".refactoring-item").on("click", function (e) {
        var refactoringClass = me.getSelectedRefactoring($(e.target).text());
        var refactoring = new refactoringClass();
        if (refactoring.isOnElement()) {
            pageManager.enableElementSelection({
                "scrapperClass": "QuerySelectorScrapper",
                "targetElementSelector": refactoringClass.targetElements(),
                "onElementSelection": "onElementSelection",
                "justFullPath": true
            });
            pageManager.preventDomElementsBehaviour();
            sidebar.show(new SelectElementView(refactoring));
        }
        else {
            var refactoringView = new (refactoringClass.getView());
            refactoringView.setRefactoring(refactoring);
            sidebar.show(refactoringView);
        }

    });

    $("#save-version").on("click", function () {
        sidebar.show(new NewVersionView());
    });

    $("#refactoring-back").on("click", function () {
        sidebar.show(new VersionsView());
    });
};

