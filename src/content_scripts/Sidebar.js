function Sidebar () {
    this.currentView = new RefactoringsListView ();
    this.opened = false;
}

Sidebar.prototype.render = function () {
    $("#refactorings-sidebar").empty();
    this.currentView.render();
};

Sidebar.prototype.open = function () {
    var div = $("<div>")[0];
    $(div).attr("id", "refactorings-sidebar");
    document.body.appendChild(div);
    this.render();
    this.opened = true;
};

Sidebar.prototype.close = function () {
    $("#refactorings-sidebar").remove();
    this.opened = false;
}

Sidebar.prototype.toggle = function () {
    this.opened ? this.close(): this.open();
};


sidebar = new Sidebar();
browser.runtime.onMessage.addListener((request, sender) => {
    sidebar.toggle();
});