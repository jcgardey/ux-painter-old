function VersionsView () {
    
};

VersionsView.prototype.getVersions = function () {
    return ["Version A", "Version B", "Version C"];
};

VersionsView.prototype.render = function () {
    $("#refactorings-sidebar").append("<h4 style='text-align:center'>Versions</h4>");
    $("#refactorings-sidebar").append("<ul class='refactorings-list' id='versions-list'></ul>");

    $(this.getVersions()).each(function (i, version) {
       $("#versions-list").append("<li><a href='#'>" + version + "</a></li>");
    });

    $("#refactorings-sidebar").append("<div class='refactoring-buttons'><button id='new-version'>New Version</button></div>");

    $("#new-version").on("click", function () {
        sidebar.show(new RefactoringsListView());
    });
}