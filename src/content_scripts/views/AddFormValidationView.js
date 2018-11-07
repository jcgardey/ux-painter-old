function AddFormValidationView() {
    this.requiredInputs = [];
}


AddFormValidationView.prototype = new RefactoringOnElementView();

AddFormValidationView.prototype.render = function () {
    RefactoringOnElementView.prototype.render.call(this);

    $("#refactoring-form").append("<label>Required Inputs</label><ul id='required-input-list'></ul>");
    $("#refactoring-form").append("<button id='add_required_input' type='button'>Add Required Input</button>");

    $("#add_required_input").on("click", function () {
        pageManager.enableElementSelection({
            "scrapperClass": "QuerySelectorScrapper",
            "targetElementSelector": "input, select",
            "onElementSelection": "onElementSelection",
            "justFullPath": true
        });
        pageManager.preventDomElementsBehaviour();
    });
};

AddFormValidationView.prototype.onElementSelected = function (element) {
    elementXpath = new XPathInterpreter().getPath(element, document.body);
    this.requiredInputs.push(elementXpath);
    $("#required-input-list").append("<li>" + elementXpath + "</li>");
    pageManager.restoreDomElementsBehaviour();
};

AddFormValidationView.prototype.setRefactoringArguments = function () {
    this.refactoring.setRequiredInputs(this.requiredInputs);
};