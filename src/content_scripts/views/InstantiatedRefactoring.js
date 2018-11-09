function InstantiatedRefactoring(url, aRefactoring){
	this.url = url;
	this.refactoring = aRefactoring;
}

InstantiatedRefactoring.prototype.execute = function(){
	console.log("A ver si aplica: " + this.refactoring);
	if(this.isPageATarget(document.location.href)){
		console.log("aplicando: " + this.refactoring);
		console.log(this.refactoring.refactoring);
		let refactoring_class = eval(this.refactoring.refactoring);
		console.log(refactoring_class);
		let refactoring_instance = new refactoring_class(this.refactoring);
		console.log(refactoring_instance);
		refactoring_instance.execute();
	}
}

InstantiatedRefactoring.prototype.isPageATarget = function(url){
	var isURLaTarget = false;
	if(typeof(url) != "string"){
		return false;
	}
	//for (var i=0;i < this.url_expressions.length;i++){
	//	if (url.match(this.url_expressions[i]) != null){
		console.log(url);
		console.log(this.url);
		console.log(this.url.match(url));
		if (this.url.match(url) != null){
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

