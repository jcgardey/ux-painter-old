function RefactoringStorage(){
	if (localStorage.getItem("current_version") == null)
		localStorage.setItem("current_version", "undefined");

	if (localStorage.getItem("application_versions") == null)
		localStorage.setItem("application_versions", JSON.stringify([]));
}

RefactoringStorage.prototype.storeVersion = function(objectVersion){
	let version = objectVersion;
	let versions = this.getVersions();
	if (this.getVersion(objectVersion.version_name) != null){
		version = this.getVersion(objectVersion.version_name);
		versions.pop(version);
		version.serialized_refactorings = objectVersion.serialized_refactorings;
	}
	//let versions = this.getVersions();
	versions.push(version);
	this.storeVersions(versions);
}

RefactoringStorage.prototype.getVersions = function(){
	return JSON.parse(localStorage.getItem("application_versions"));
}


RefactoringStorage.prototype.storeVersions = function(versions){
	localStorage.setItem("application_versions", JSON.stringify(versions));
}

RefactoringStorage.prototype.getVersion = function(aName){
	let versions = this.getVersions();
	for (var i = versions.length - 1; i >= 0; i--) {
		if(versions[i]["version_name"] == aName){
			return versions[i];
		}
	}
	return null
}

RefactoringStorage.prototype.currentVersion = function(){
	return localStorage.getItem("current_version");
}

RefactoringStorage.prototype.setCurrentVersion = function(version_name){
	return localStorage.setItem("current_version",version_name);
}

RefactoringStorage.prototype.removeVersion = function(version_name){
	let versions = this.getVersions();
	if (this.getVersion(version_name) != null){
		version = this.getVersion(version_name);
		versions.pop(version);
	}
	//let versions = this.getVersions();
	this.storeVersions(versions);
}
