function VersionsView () {
    
};

VersionsView.prototype.getVersions = function () {
    let versions = [];
    for (var i = sidebar.refactoringSessionManager.getVersions().length - 1; i >= 0; i--) {
        versions.push(sidebar.refactoringSessionManager.getVersions()[i].version_name);
    }
    return versions;
};

VersionsView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>Versions</h4>");
    $("#refactorings-sidebar").append("<ul class='refactorings-list' id='versions-list'></ul>");

    $(this.getVersions()).each(function (i, version) {
        $("#versions-list").append("<li><a class='application_version' id='" + version + "'>" + version + "</a> <a class='delete_application_version' id='" + version + "'>Remove</a></li>");
    });
    
    $("#versions-list").append("<li><a class='application_version' id='original_application_version'>Original</a></li>");

    if(sidebar.refactoringSessionManager.getVersions() == 0)
        $("#versions-list").append("<li>There are not versions defined</li>");

    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><span>Current Version: " + sidebar.refactoringSessionManager.getCurrentVersion() + "</span></div>");

    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><button id='new-version'>Add Refactoring</button></div>");

    $(".application_version").on("click", function () {
        if(this.id != "original_application_version")
            sidebar.refactoringSessionManager.useVersion(this.id);
        else{
            sidebar.refactoringSessionManager.resetSession();
            document.location.reload();
        }
    });

    $(".delete_application_version").on("click", function () {
            sidebar.refactoringSessionManager.removeVersion(this.id);
            document.location.reload();
    });

    $("#new-version").on("click", function () {
        sidebar.show(new RefactoringsListView());
    });

    $("#add-refactoring-buttons").on("click", function () {
        sidebar.show(new RefactoringsListView());
    });
}