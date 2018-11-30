function Logger() {
    this.versionStarted = false;
    this.version = {"refactorings": [], "time": 0};
}

Logger.prototype.startRefactoring = function () {
    this.refactoringStartTime = new Date().getTime();
};

Logger.prototype.logRefactoring = function (aRefactoring) {
    var refactoringFinishTime = new Date().getTime();
    var refactoringCreationTime = refactoringFinishTime - this.refactoringStartTime;
    this.version.refactorings.push({"refactoringName":aRefactoring.constructor.getName(), "time":(refactoringCreationTime / 1000)});
    console.log(this.version);
};

Logger.prototype.startVersion = function () {
    if (!this.versionStarted) {
        this.versionStartTime = new Date().getTime();
        this.versionStarted = true;
    }
};

Logger.prototype.logVersion = function (aVersion) {
    var versionFinishTime = new Date().getTime();
    var versionCreationTime = versionFinishTime - this.versionStartTime;
    this.version.time = versionCreationTime / 1000;
    this.version.versionName = aVersion;
    this.version.id = sidebar.refactoringSessionManager.getVersion(aVersion).id;

   browser.runtime.sendMessage({"message": "log", "version": this.version});
   this.clearVersion();
};

Logger.prototype.clearVersion = function () {
    this.version = {"refactorings": [], "time": 0};
}
