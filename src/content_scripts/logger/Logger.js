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
    this.version.refactorings.push({"name":aRefactoring.constructor.getName(), "time":(refactoringCreationTime / 1000)});
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
    var versionLogger = this.getVersionLogger();
    if (!versionLogger[aVersion]) {
        versionLogger[aVersion] = {"refactorings": this.version.refactorings, "time": versionCreationTime / 1000};
    }
    else {
        versionLogger[aVersion].time += versionCreationTime / 1000;
        for (i = 0; i < this.version.refactorings.length;i++) {
            versionLogger[aVersion].refactorings.push(this.version.refactorings[i]);
        }
    }
    this.saveLogger(versionLogger);
};

Logger.prototype.getVersionLogger = function () {
    if (!localStorage.getItem("logger")) {
        return {};
    }
    return JSON.parse(localStorage.getItem("logger"));
};

Logger.prototype.saveLogger = function (logger) {
    alert(JSON.stringify(logger));
    localStorage.setItem("logger", JSON.stringify(logger));
};