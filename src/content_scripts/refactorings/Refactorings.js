
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
};

UsabilityRefactoring.prototype.serialize = function () {
    return {"refactoring": this.constructor.name};
};

UsabilityRefactoring.createRefactoring = function (json) {
    return new window[json.refactoring](json);
}

function UsabilityRefactoringOnElement(json) {
    if (json) {
        this.elementXpath = json.elementXpath;
    }
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

UsabilityRefactoringOnElement.prototype.serialize = function () {
    var json = UsabilityRefactoring.prototype.serialize.call(this);
    json.elementXpath = this.elementXpath;
    return json;
}

UsabilityRefactoringOnElement.prototype.isOnElement = function () {
    return true;
};










    









