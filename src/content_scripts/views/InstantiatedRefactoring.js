function InstantiatedRefactoring(url, aRefactoring){
	this.url = url;
	this.refactoring = aRefactoring.serialize();
}

InstantiatedRefactoring.prototype.applyTo = function(){
	return false;
}

InstantiatedRefactoring.prototype.isPageATarget = function(url){
	var isURLaTarget = false;
	if(typeof(url) != "string"){
		return false;
	}
	//for (var i=0;i < this.url_expressions.length;i++){
	//	if (url.match(this.url_expressions[i]) != null){
		if (url.match(this.url) != null){
			isURLaTarget = true;
		}
	//}
	/*if (isURLaTarget){
		for (var i=0;i < this.excluded_url_expressions.length;i++){
			if (url.match(this.excluded_url_expressions[i]) != null){
				isURLaTarget = false;
			}
	}	
	}*/

	return isURLaTarget;
};

InstantiatedRefactoring.prototype.refactoringName = function(){
	return this.refactoring["refactoring"];
}

InstantiatedRefactoring.prototype.serialize = function(){
	return {"url":this.url,"refactoring":this.refactoring};
}

