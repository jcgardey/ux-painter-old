function ProvideDefaultOptionRefactoring(json) {
    UsabilityRefactoringOnElement.call(this,json);
    if (json) {
        this.defaultOptionIndex = json.defaultOptionIndex;
    }
}

ProvideDefaultOptionRefactoring.prototype = new UsabilityRefactoringOnElement();
ProvideDefaultOptionRefactoring.prototype.constructor = ProvideDefaultOptionRefactoring;

ProvideDefaultOptionRefactoring.prototype.transform = function () {
    var element = $(this.getElement());
    if (typeof(element[0]) != "undefined") {
        element.prop("selectedIndex", this.defaultOptionIndex);
    }
};

ProvideDefaultOptionRefactoring.prototype.setDefaultOption = function (option) {
    this.defaultOptionIndex = option;
};

ProvideDefaultOptionRefactoring.prototype.serialize = function () {
    var json = UsabilityRefactoringOnElement.prototype.serialize.call(this);
    json.defaultOptionIndex = this.defaultOptionIndex;
    return json;
}


ProvideDefaultOptionRefactoring.getName = function () {
    return "Provide Default Option";
};

ProvideDefaultOptionRefactoring.getView = function () {
    return ProvideDefaultOptionView;
};

ProvideDefaultOptionRefactoring.targetElements = function () {
    return "select";
}

