
function SelectElementView(refactoring) {
    this.refactoring = refactoring;
}

SelectElementView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4>Select an Element</h4>");
    $("#refactorings-sidebar").append("<p>Target Element:</p> <span id='element_xpath'></span>");
    $("#refactorings-sidebar").append("<button id='continue'>Continue</button>")

    var me = this;

    $("#continue").on("click", function () {
        var refactoringView = new (me.refactoring.constructor.getView());
        refactoringView.setRefactoring(me.refactoring);
        pageManager.restoreDomElementsBehaviour();
        sidebar.show(refactoringView);
    });
}

SelectElementView.prototype.onElementSelected = function (element) {
    elementXpath = new XpathProcessor().getXPath(element);
    this.refactoring.setElement(elementXpath);
    $("#element_xpath").text(elementXpath);
}