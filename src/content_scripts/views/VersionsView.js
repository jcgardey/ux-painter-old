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
       $("#versions-list").append("<li><a href='#' class='application_version' id='" + version + "'>" + version + "</a></li>");
    });

    if(sidebar.refactoringSessionManager.getVersions() == 0)
        $("#versions-list").append("<li>There are not versions defined</li>");

    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><button id='new-version'>New Version</button></div>");

    $(".application_version").on("click", function () {
        sidebar.refactoringSessionManager.useVersion(this.id);
    });

    $("#new-version").on("click", function () {
        sidebar.show(new RefactoringsListView());
        sidebar.refactoringSessionManager.resetSession();
    });
}