
function UsabilityRefactoring() {

}

UsabilityRefactoring.prototype.initialize = function () {

};

UsabilityRefactoring.prototype.transform = function () {

};

UsabilityRefactoring.prototype.execute = function () {
    this.initialize();
    this.transform();
};

UsabilityRefactoring.prototype.isOnElement = function () {
    return false;
}

function UsabilityRefactoringOnElement(elementXpath) {
    this.elementXpath = elementXpath;
}

UsabilityRefactoringOnElement.prototype = new UsabilityRefactoring();

UsabilityRefactoringOnElement.prototype.setElement = function (elementXpath) {
    this.elementXpath = elementXpath;
};

UsabilityRefactoringOnElement.prototype.getElementXpath = function () {
    return this.elementXpath;
};

UsabilityRefactoringOnElement.prototype.getElement = function () {
    return new XPathInterpreter().getSingleElementByXpath(this.elementXpath, document.body);
};

UsabilityRefactoringOnElement.prototype.isOnElement = function () {
    return true;
};










    









