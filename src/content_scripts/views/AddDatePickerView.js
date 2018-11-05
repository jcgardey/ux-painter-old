function AddDatePickerView() {
    this.refactoring = new AddDatePickerRefactoring();
}

AddDatePickerView.prototype = new RefactoringOnElementView();


AddDatePickerView.prototype.getTitle = function () {
    return "Add DatePicker";
};

