function TurnInputIntoRadiosRefactoring(elementXpath, values) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.values = values;
}

TurnInputIntoRadiosRefactoring.prototype = new UsabilityRefactoringOnElement();

TurnInputIntoRadiosRefactoring.prototype.constructor = TurnInputIntoRadiosRefactoring;

TurnInputIntoRadiosRefactoring.prototype.setValues = function (values) {
    this.values = values;
};


TurnInputIntoRadiosRefactoring.prototype.transform = function () {
    var anElement = $(this.getElement());
    if (typeof(anElement[0]) != "undefined") {
        anElement.attr("type", "hidden");
        var radioName = getRandomID();
        var otherTextInput = getRandomID();
        var otherRadioID = getRandomID()

        anElement.after("<p><input type='radio' name='" + radioName + "' id='" + otherRadioID + "' value='Other'><label style='cursor:pointer' for='" + otherRadioID + "'>Other</label> <input type='text' id='" + otherTextInput + "'/></p>");
        $("#" + otherTextInput).keyup(function() {
            anElement.val(this.value)
        }).click(function() {
            $("#" + otherRadioID).prop("checked", true)
        });

        $(this.values).each(function(index, value) {
            var newID = getRandomID();
            anElement.after("<p><input type='radio' name='" + radioName + "' id='" + newID + "' value='" + value + "'><label style='cursor:pointer' for='" + newID + "'>" + value + "</label></p>");
        });

        $("input:radio[name='" + radioName + "']").change(function() {
            anElement.val(this.value);
        });
    }
};

TurnInputIntoRadiosRefactoring.getName = function () {
    return "Turn Input into Radios";
};

TurnInputIntoRadiosRefactoring.targetElements = function () {
    return "input[type='text']";
};

TurnInputIntoRadiosRefactoring.getView = function () {
    return AddAutocompleteView;
};

function getRandomID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};