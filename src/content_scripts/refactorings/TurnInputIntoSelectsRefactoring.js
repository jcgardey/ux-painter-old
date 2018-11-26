function TurnInputIntoSelectsRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
    if (json) {
        this.values = json.values;
    }
}

TurnInputIntoSelectsRefactoring.prototype = new UsabilityRefactoringOnElement();

TurnInputIntoSelectsRefactoring.prototype.constructor = TurnInputIntoSelectsRefactoring;

TurnInputIntoSelectsRefactoring.prototype.transform = function () {
    var anElement = this.getElement();
    if (typeof (anElement) === "undefined" ) {
        return
    }
    anElement.setAttribute("type", "hidden");
    var otherElement = document.createElement("input");
    otherElement.setAttribute("type", "text");
    otherElement.style.display = "none";

    var selectElement = document.createElement("select");

    this.values.push("Other");
    for (i = 0; i < this.values.length; i++) {
        var optionElement = document.createElement("option");
        optionElement.textContent = this.values[i];
        selectElement.appendChild(optionElement);
    }

    anElement.parentNode.insertBefore(otherElement, anElement.nextSibling);
    anElement.parentNode.insertBefore(selectElement, anElement.nextSibling);

    selectElement.addEventListener("change", function () {
       if (selectElement.value == "Other") {
            otherElement.value = "";
            otherElement.style.display = "inline";
            anElement.value = "";
       }
       else {
           otherElement.style.display = "none";
           anElement.value = selectElement.value;
       }
    });
    otherElement.addEventListener("keyup", function () {
       anElement.value = otherElement.value;
    });

};

TurnInputIntoSelectsRefactoring.prototype.setValues = function (values) {
    this.values = values;
};

TurnInputIntoSelectsRefactoring.getName = function () {
    return "Turn Input into Selects";
};