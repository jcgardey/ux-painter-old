
function RefactoringSessionManager() {
	this.refactoring_storage = new RefactoringStorage();
	this.instantiated_refactorings = [];
	this.currentVersion = null;

	if (this.refactoring_storage.currentVersion() != "undefined"){
		this.currentVersion = this.refactoring_storage.getVersion(this.refactoring_storage.currentVersion());
		this.executeCurrentVersion();
	}

}

RefactoringSessionManager.prototype.addRefactoringForURL = function (url, aRefactoring) {
	this.instantiated_refactorings.push(new InstantiatedRefactoring(url, aRefactoring.serialize()));
}

RefactoringSessionManager.prototype.saveSessionAsVersion = function(version_name) {
	let serialized_refactorings = this.serializeRefactorings();
	this.storeAsVersion(version_name, serialized_refactorings);
}

RefactoringSessionManager.prototype.getVersions = function () {
	return this.refactoring_storage.getVersions();
}

RefactoringSessionManager.prototype.serializeRefactorings = function () {
	let serialized = [];
	for (var i = this.instantiated_refactorings.length - 1; i >= 0; i--)
		serialized.push(this.instantiated_refactorings[i].serialize());
	return serialized;
}

RefactoringSessionManager.prototype.storeAsVersion = function(version_name,serialized_refactorings){
	 this.refactoring_storage.storeVersion({"version_name":version_name, "serialized_refactorings":serialized_refactorings});

}

RefactoringSessionManager.prototype.useVersion = function(aName) {
	this.refactoring_storage.setCurrentVersion(aName);
	document.location.reload();
}

RefactoringSessionManager.prototype.resetSession = function(){
	this.instantiated_refactorings = [];
	this.refactoring_storage.setCurrentVersion("undefined");
}

RefactoringSessionManager.prototype.executeCurrentVersion = function(){
	for (var i = this.currentVersion.serialized_refactorings.length - 1; i >= 0; i--) {
		let instantiated_refactoring = new InstantiatedRefactoring(this.currentVersion.serialized_refactorings[i].url, this.currentVersion.serialized_refactorings[i].refactoring);
		this.instantiated_refactorings.push(instantiated_refactoring);
		instantiated_refactoring.execute();
	}
}

RefactoringSessionManager.prototype.isNewVersionUnderConstruction = function(){
	return (this.instantiated_refactorings.length > 0);
}
