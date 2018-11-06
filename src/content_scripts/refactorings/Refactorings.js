
function UsabilityRefactoring() {

}

UsabilityRefactoring.prototype.initialize = function () {

};

UsabilityRefactoring.prototype.transform = function () {

};

UsabilityRefactoring.prototype.execute = function () {
    this.initialize();
    this.transform();
};

UsabilityRefactoring.prototype.isOnElement = function () {
    return false;
}

function UsabilityRefactoringOnElement(elementXpath) {
    this.elementXpath = elementXpath;
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

UsabilityRefactoringOnElement.prototype.isOnElement = function () {
    return true;
}


function AddFormValidationRefactoring(formXpath, requiredInputXpaths) {
    UsabilityRefactoringOnElement.call(this, formXpath);
    this.requiredInputXpaths = requiredInputXpaths;
}

AddFormValidationRefactoring.prototype = new UsabilityRefactoringOnElement();

AddFormValidationRefactoring.prototype.transform = function () {
    var formElement = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if (typeof(formElement[0]) != "undefined") {
        $(document).ready(function() {
            formElement.submit(function(e) {
                $.each(this.requiredInputXpaths, function(i, xpath) {
                    var input = new XpathProcessor().getElementByXpath(xpath);
                    if (!input || !$(input).val()) {
                        $(input).css("border-color", "rgb(255,0,0)");
                    }
                });
                e.preventDefault();
            });
        });
    }
};

function ProvideDefaultOptionRefactoring(elementXpath, defaultOptionIndex) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.defaultOptionIndex = defaultOptionIndex;
}

ProvideDefaultOptionRefactoring.prototype = new UsabilityRefactoringOnElement();

ProvideDefaultOptionRefactoring.prototype.transform = function () {
    var element = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if (typeof(element[0]) != "undefined") {
        element.prop("selectedIndex", this.defaultOptionIndex);
    }
};





    









