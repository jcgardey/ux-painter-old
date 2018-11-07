function AddTooltipRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
    if (json) {
        this.tooltipName = json.tooltip;
    }
}

AddTooltipRefactoring.prototype = new UsabilityRefactoringOnElement();

AddTooltipRefactoring.prototype.constructor = AddTooltipRefactoring;

AddTooltipRefactoring.prototype.transform = function () {
    var anElement = $(this.getElement());
    if(typeof(anElement[0]) != "undefined") {
        anElement.addClass("tip");
        anElement.attr("data-tip", this.tooltipName);
        $(".tip").tipr();
    }
};

AddTooltipRefactoring.prototype.serialize = function () {
    var json = UsabilityRefactoringOnElement.prototype.serialize.call(this);
    json.tooltip = this.tooltipName;
    return json;
}

AddTooltipRefactoring.prototype.setTooltipName = function (tooltipName) {
    this.tooltipName = tooltipName;
};

AddTooltipRefactoring.getName = function () {
    return "Add Tooltip";
};

AddTooltipRefactoring.targetElements = function () {
    return "a, div, img, input[type='button'], input[type='submit'], span, p, button";
};

AddTooltipRefactoring.getView = function () {
    return AddTooltipView;
}

