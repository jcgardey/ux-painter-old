function NewVersionView () {
    
}

NewVersionView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>Save Version</h4>");
    $("#refactorings-sidebar").append("<label>Version Name</label>");
    $("#refactorings-sidebar").append("<input type='text' id='version_name'/>");
    $("#refactorings-sidebar").append("<button id='save-version-button'>Save</button>")

    $("#save-version-button").on("click", function () {
        var versionName = $("#version_name").val();
        sidebar.show(new VersionsView());
    });
};