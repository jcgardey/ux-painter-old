function RefactoringStorage(){
	if (localStorage.getItem("current_version") == null)
		localStorage.setItem("current_version", "undefined");
}

RefactoringStorage.prototype.storeVersion = function(name, version_data){
	let versions = this.getVersions();
	versions.push({"name":name, "version_data": version_data});
}

RefactoringStorage.prototype.getVersions = function(){
	return JSON.parse(localStorage.getItem("application_versions"));
}


RefactoringStorage.prototype.getVersion = function(aName){
	let versions = JSON.parse(localStorage.getItem("application_versions"));
	for (var i = versions.length - 1; i >= 0; i--) {
		if(versions[i]["name"] == aName)
			return versions[i];
	}
}

RefactoringStorage.prototype.current_version = function(){
	return localStorage.getItem("current_version");
}

RefactoringStorage.prototype.set_current_version = function(version_name){
	return localStorage.setItem("current_version",version_name);
}