
function UsabilityRefactoring() {

}

UsabilityRefactoring.prototype.initialize = function () {

};

UsabilityRefactoring.prototype.transform = function () {

};

UsabilityRefactoring.prototype.execute = function () {
    this.initialize();
    this.transform();
    this.applyStyle();
};

UsabilityRefactoring.prototype.isOnElement = function () {
    return false;
};

UsabilityRefactoring.prototype.serialize = function () {
    return {"refactoring": this.constructor.name};
};

UsabilityRefactoring.prototype.applyStyle = function () {

};

UsabilityRefactoring.createRefactoring = function (json) {
    return new window[json.refactoring](json);
}

function UsabilityRefactoringOnElement(json) {
    if (json) {
        this.elementXpath = json.elementXpath;
        this.style = json.style;
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

UsabilityRefactoringOnElement.prototype.initialize = function () {
    this.targetElement = this.getElement();
}

UsabilityRefactoringOnElement.prototype.serialize = function () {
    var json = UsabilityRefactoring.prototype.serialize.call(this);
    json.elementXpath = this.elementXpath;
    json.style = this.style;
    return json;
}

UsabilityRefactoringOnElement.prototype.isOnElement = function () {
    return true;
};

UsabilityRefactoringOnElement.prototype.setStyle = function (style) {
    this.style = style;
};

UsabilityRefactoringOnElement.prototype.getStyleElement = function () {
    return this.targetElement;
};

UsabilityRefactoringOnElement.prototype.applyStyle = function () {
    var newStyle = "";
    if (!this.getStyleElement().getAttribute("style")) {
        newStyle = this.style;
    }
    else {
        newStyle = ";" + this.style;
    }
    this.getStyleElement().setAttribute("style", newStyle);
};










    









