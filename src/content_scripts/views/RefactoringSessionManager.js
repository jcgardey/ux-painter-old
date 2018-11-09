
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
	this.instantiated_refactorings.push(new InstantiatedRefactoring(url, aRefactoring));
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
}

RefactoringSessionManager.prototype.executeCurrentVersion = function(){
	console.log("Voy a ejecturar la version actual que tiene");
	console.log(this.currentVersion["version_name"]);
	for (var i = this.currentVersion.serialized_refactorings.length - 1; i >= 0; i--) {
		console.log(this.currentVersion.serialized_refactorings[i]);
	}
}
