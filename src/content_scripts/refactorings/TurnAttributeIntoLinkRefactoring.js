function TurnAttributeIntoLinkRefactoring(elementXpath, targetURL) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.targetURL = targetURL;

}

TurnAttributeIntoLinkRefactoring.prototype = new UsabilityRefactoringOnElement();
TurnAttributeIntoLinkRefactoring.prototype.constructor = TurnAttributeIntoLinkRefactoring;

TurnAttributeIntoLinkRefactoring.prototype.transform = function () {
    var anElement = $(this.getElement());
    if (typeof(anElement[0]) != "undefined") {
        anElement.replaceWith($("<a href='" + this.targetURL + "'>" + anElement[0].outerHTML + "</a>"));
    }
};

TurnAttributeIntoLinkRefactoring.prototype.setTargetURL = function (url) {
    this.targetURL = url;
}

TurnAttributeIntoLinkRefactoring.getName = function () {
    return "Turn Attribute into Link";
};

TurnAttributeIntoLinkRefactoring.getView = function () {
    return TurnAttributeIntoLinkView;
};

TurnAttributeIntoLinkRefactoring.targetElements = function () {
    return "div, p, span, h1, h2, h3, h4, h5, h6";
}