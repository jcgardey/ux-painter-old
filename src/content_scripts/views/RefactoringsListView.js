function RefactoringsListView () {
    this.refactorings = ["Rename Element", "Add Tooltip", "Add Datepicker", "Add Autocomplete", "Turn Input into Radios",
        "Add Form Validation", "Turn Attribute Into Link", "Resize Input", "Add Link to Top", "Date Input into Selects",
    "Add Processing Page", "Provide Default Option"];

}

RefactoringsListView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>Available Refactorings</h4>");

    var list = $("<ul class='refactorings-list'></ul>")[0];
    $("#refactorings-sidebar").append(list);

    $.each(this.refactorings, function (i, refactoring) {
        $(list).append("<li><a class='refactoring-item'>" + refactoring + "</a></li>");
    });

    $(".refactoring-item").on("click", function () {
        pageManager.enableElementSelection({
            "scrapperClass": "QuerySelectorScrapper",
            "targetElementSelector": "input",
            "onElementSelection": "onElementSelection",
            "justFullPath": true
        });
        pageManager.preventDomElementsBehaviour();
    });
};

