
function SelectElementView(refactoring) {
    this.refactoring = refactoring;
}

SelectElementView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align: center'>Select an Element</h4>");
    $("#refactorings-sidebar").append("<p class='refactorings-label'>Target Element</p>");
    $("#refactorings-sidebar").append("<p class='refactorings-label' id='element_xpath'></p>");
    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><button id='refactoring-continue'>Continue</button></div>");
    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><button id='refactoring-back'>Back</button></div>");

    var me = this;

    $("#refactoring-continue").on("click", function () {
        if (!me.refactoring.getElement()) {
            alert("Select an element to continue");
            return false;
        }
        var refactoringView = new (me.refactoring.constructor.getView());
        refactoringView.setRefactoring(me.refactoring);
        pageManager.restoreDomElementsBehaviour();
        sidebar.show(refactoringView);
    });

    $("#refactoring-back").on("click", function () {
        pageManager.restoreDomElementsBehaviour();
        sidebar.show(new RefactoringsListView());
    });
}

SelectElementView.prototype.onElementSelected = function (element) {
    elementXpath = new XPathInterpreter().getPath(element, document.body)[0];
    this.refactoring.setElement(elementXpath);
    $("#element_xpath").text(elementXpath);
}