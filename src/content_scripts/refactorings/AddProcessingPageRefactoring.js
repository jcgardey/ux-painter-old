function AddProcessingPageRefactoring(json) {
    UsabilityRefactoringOnElement.call(this, json);
}

AddProcessingPageRefactoring.prototype = new UsabilityRefactoringOnElement();
AddProcessingPageRefactoring.prototype.constructor = AddProcessingPageRefactoring;

AddProcessingPageRefactoring.prototype.transform = function () {
    var form = $(this.getElement());
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
            setTimeout(function() { form[0].submit() }, 1);
        });
        submit.hide().after(button);
    }
};

AddProcessingPageRefactoring.getName = function () {
    return "Add Processing Page";
};

AddProcessingPageRefactoring.targetElements = function () {
    return "form";
};

AddProcessingPageRefactoring.getView = function () {
    return RefactoringOnElementView;
}
