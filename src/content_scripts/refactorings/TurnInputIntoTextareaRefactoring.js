function TurnInputIntoTextareaRefactoring (json) {
    UsabilityRefactoringOnElement.call(this, json);
    if (json) {
        this.size = json.size;
    }
}

TurnInputIntoTextareaRefactoring.prototype = new UsabilityRefactoringOnElement();
TurnInputIntoTextareaRefactoring.prototype.constructor = TurnInputIntoTextareaRefactoring;

TurnInputIntoTextareaRefactoring.prototype.transform = function () {
    var textInput = this.getElement();
    textInput.setAttribute("type", "hidden");

    var textArea = document.createElement("textarea");
    textArea.setAttribute("rows", this.size.substring(0,this.size.indexOf(",")));
    textArea.setAttribute("columns", this.size.substring(this.size.indexOf(",") + 1));
    textInput.parentNode.insertBefore(textArea, textInput);
    textArea.addEventListener("keyup", function () {
       textInput.value =  textArea.value;
    });
};

TurnInputIntoTextareaRefactoring.prototype.setSize = function (aSize) {
    this.size = aSize;
};

TurnInputIntoTextareaRefactoring.prototype.serialize = function () {
    var json = UsabilityRefactoringOnElement.prototype.serialize.call(this);
    json.size = this.size;
    return json;
};

TurnInputIntoTextareaRefactoring.targetElements = function () {
    return "input[type='text']";
};

TurnInputIntoTextareaRefactoring.getName = function () {
    return "Turn Input into Textarea";
};

TurnInputIntoTextareaRefactoring.getView = function () {
    return TurnInputIntoTextareaView;
}
