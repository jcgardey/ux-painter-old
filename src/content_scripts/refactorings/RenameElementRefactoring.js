function RenameElementRefactoring (elementXpath, newName) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.newName = newName;
}

RenameElementRefactoring.prototype = new UsabilityRefactoringOnElement();

RenameElementRefactoring.prototype.constructor = RenameElementRefactoring;

RenameElementRefactoring.prototype.transform = function () {
    var anElement = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if(typeof(anElement[0]) != "undefined") {
        anElement.html(this.newName);
    }
};

RenameElementRefactoring.prototype.setNewName = function (newName) {
    this.newName = newName;
}

RenameElementRefactoring.getName = function () {
    return "Rename Element";
};

RenameElementRefactoring.getView = function () {
    return RenameElementView;
}

RenameElementRefactoring.targetElements = function () {
    //return "a, div, img, button, input[type='button'], input[type='submit']";
    return "a, button, input[type='button'], input[type='submit']";
};
