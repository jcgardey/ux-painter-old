function NewVersionView () {
    
}

NewVersionView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>Save Version</h4>");

    $("#refactorings-sidebar").append("<div id='refactoring-form'></div>");
    $("#refactoring-form").append("<label>Version Name</label>");
    $("#refactoring-form").append("<input type='text' id='version_name'/>");
    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><button id='save-version-button'>Save</button></div>");

    $("#save-version-button").on("click", function () {
        var versionName = $("#version_name").val();
        sidebar.show(new VersionsView());
    });
};