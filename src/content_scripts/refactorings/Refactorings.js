
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

function DateInputIntoSelectsRefactoring(elementXpath) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    
}

DateInputIntoSelectsRefactoring.prototype = new UsabilityRefactoringOnElement();

DateInputIntoSelectsRefactoring.prototype.transform = function () {
    var dateInput = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if (typeof(dateInput[0]) != "undefined") {
        var submitFieldName = dateInput.attr("name");
        dateInput.attr("name", "");
        dateInput.dateDropdowns({ submitFieldName: submitFieldName });
    }
};


function TurnAttributeIntoLinkRefactoring(elementXpath, targetURL) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.targetURL = targetURL;

}

TurnAttributeIntoLinkRefactoring.prototype = new UsabilityRefactoringOnElement();

TurnAttributeIntoLinkRefactoring.prototype.transform = function () {
    var anElement = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if (typeof(anElement[0]) != "undefined") {
        anElement.replaceWith($("<a href='" + this.targetURL + "'>" + anElement[0].outerHTML + "</a>"));
    }
};

function AddProcessingPageRefactoring(formXpath) {
    UsabilityRefactoringOnElement.call(this, formXpath);
}

AddProcessingPageRefactoring.prototype = new UsabilityRefactoringOnElement();

AddProcessingPageRefactoring.prototype.transform = function () {
    var form = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if (typeof(form[0]) != "undefined") {
        $("head").append("<style>#overlay {font-size:2em;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity:0.5;opacity:0.5;z-index:9998;padding:100px 50%;}</style>");
        $("body").append("<div id='overlay'>Loading...</div>");
        $("#overlay").hide();
        submit = $(form.find(":submit"));
        submitCSS = submit.getStyleObject();
        button = submit.clone().attr("type", "button");
        button.css(submitCSS);
        button.click(function() {
            $("#overlay").show();
            setTimeout(function() { form.submit() }, 1);
        });
        submit.hide().after(button);
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





    









