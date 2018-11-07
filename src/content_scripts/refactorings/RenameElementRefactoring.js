function RenameElementRefactoring (json) {
    UsabilityRefactoringOnElement.call(this, json);
    if (json) {
        this.newName = json.newName;
    }
}

RenameElementRefactoring.prototype = new UsabilityRefactoringOnElement();

RenameElementRefactoring.prototype.constructor = RenameElementRefactoring;

RenameElementRefactoring.prototype.transform = function () {
    var anElement = $(this.getElement());
    if(typeof(anElement[0]) != "undefined") {
        anElement.html(this.newName);
    }
};

RenameElementRefactoring.prototype.setNewName = function (newName) {
    this.newName = newName;
};

RenameElementRefactoring.prototype.serialize = function () {
    var json = UsabilityRefactoringOnElement.prototype.serialize.call(this);
    json.newName = this.newName;
    return json;
}

RenameElementRefactoring.getName = function () {
    return "Rename Element";
};

RenameElementRefactoring.getView = function () {
    return RenameElementView;
}

RenameElementRefactoring.targetElements = function () {
    //return "a, div, img, button, input[type='button'], input[type='submit']";
    return "a, button, input[type='button'], input[type='submit'], span, p";
};
