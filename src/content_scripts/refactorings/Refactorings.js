
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
}


function AddAutocompleteRefactoring(elementXpath, values) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.values = values;
};

AddAutocompleteRefactoring.prototype = new UsabilityRefactoringOnElement();

AddAutocompleteRefactoring.prototype.transform = function () {
    var anElement = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if (typeof(anElement[0]) != "undefined") {
        new Awesomplete(anElement[0], { list: this.values });
    }
};


function TurnInputIntoRadiosRefactoring(elementXpath, values) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.values = values;
}

TurnInputIntoRadiosRefactoring.prototype = new UsabilityRefactoringOnElement();

function getRandomID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

TurnInputIntoRadiosRefactoring.prototype.transform = function () {
    var anElement = $(new XpathProcessor().getElementByXpath(this.elementXpath));
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

function ResizeInputRefactoring(elementXpath, inputSize) {
    UsabilityRefactoringOnElement.call(this, elementXpath);
    this.inputSize = inputSize;
}

ResizeInputRefactoring.prototype = new UsabilityRefactoringOnElement();

ResizeInputRefactoring.prototype.transform = function () {
    var input = $(new XpathProcessor().getElementByXpath(this.elementXpath));
    if (typeof(input[0]) != "undefined") {
        input.width(this.inputSize);
    }
}


function LinkToTopRefactoring() {

}

LinkToTopRefactoring.prototype = new UsabilityRefactoringOnElement();

LinkToTopRefactoring.prototype.transform = function () {
    $("body").append('<a id="scroller" style="display:block;position:fixed;bottom:30px;right:30px;width:35px;height:35px;cursor:pointer;background: url(https://selfrefactoring.s3.amazonaws.com/resources/refactorings/totop.png) no-repeat;display:none"></a>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) { $('#scroller').fadeIn(); } else { $('#scroller').fadeOut(); }
    });
    $('#scroller').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 400);
        return false;
    });
}

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





    









