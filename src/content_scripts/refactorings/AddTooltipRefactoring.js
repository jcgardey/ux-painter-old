function AddTooltipRefactoring(elementXpath, tooltipName) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.tooltipName = tooltipName;
}

AddTooltipRefactoring.prototype = new UsabilityRefactoringOnElement();

AddTooltipRefactoring.prototype.transform = function () {
    var anElement = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if(typeof(anElement[0]) != "undefined") {
        anElement.addClass("tip");
        anElement.attr("data-tip", this.tooltipName);
        $(".tip").tipr();
    }
};

AddTooltipRefactoring.prototype.setTooltipName = function (tooltipName) {
    this.tooltipName = tooltipName;
};

AddTooltipRefactoring.getName = function () {
    return "Add Tooltip";
};

AddTooltipRefactoring.targetElements = function () {
    return "a, div, img";
};

AddTooltipRefactoring.getView = function () {
    return AddTooltipView;
}

