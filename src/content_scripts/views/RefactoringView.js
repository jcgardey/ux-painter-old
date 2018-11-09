function RefactoringView () {
}

RefactoringView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>" + this.refactoring.constructor.getName() + "</h4>");
    $("#refactorings-sidebar").append("<div id='refactoring-form'></div>");

    let url = document.location.href;
    var formGroup = $("<div class='refactorings-form-group'>")[0];
    $(formGroup).append("<label>URL for Refactoring</label>");
    $(formGroup).append("<input type='text' id='url_for_instance' value='"+ url +"'/>");
    $("#refactoring-form").append(formGroup);


    var formGroup2 = $("<div class='refactorings-form-group'>")[0];
    $(formGroup2).append("<div class='refactoring-buttons'><button id='apply'>Apply</button></div>");
    $(formGroup2).append("<div class='refactoring-buttons'><button id='cancel'>Back</button></div>");
    $("#refactorings-sidebar").append(formGroup2);

    var me = this;
    $("#apply").on("click", function () {
        let url = $("#url_for_instance").val();
        me.setRefactoringArguments();
        me.refactoring.execute();
        sidebar.show(new RefactoringsListView());        
        sidebar.refactoringSessionManager.addRefactoringForURL(url, me.refactoring);
    });

    $("#cancel").on("click", function () {
       sidebar.show(new RefactoringsListView());
    });
};

RefactoringView.prototype.setRefactoring = function (refactoring) {
    this.refactoring = refactoring;
};

RefactoringView.prototype.setRefactoringArguments = function () {

};

