
var elementXpath = new XpathProcessor().getXPath($("a[href='contacto.php']")[0]);
var renameElement = new RenameElementRefactoring(elementXpath, "Renombrado");
renameElement.execute();

var addTooltip = new AddTooltipRefactoring(elementXpath, "Un tooltip");
addTooltip.execute();

var dateInput = new XpathProcessor().getXPath($("#other_date")[0]);
var addDatePicker = new AddDatePickerRefactoring(dateInput);
addDatePicker.execute();

var nameInput = new XpathProcessor().getXPath($("input[name='name']")[0]);
var addAutcomplete = new AddAutocompleteRefactoring(nameInput, ["Jorge", "Pedro", "Jose"]);
addAutcomplete.execute();

var surnameInput = new XpathProcessor().getXPath($("input[name='lastname']")[0]);
var turnInputIntoRadios = new TurnInputIntoRadiosRefactoring(surnameInput, ["last1", "last2"]);
turnInputIntoRadios.execute();

var form = new XpathProcessor().getXPath($("#form")[0]);
var requiredEmail = new XpathProcessor().getXPath($("input[name='email']")[0]);
var array = [].push(requiredEmail);
var addFormValidation = new AddFormValidationRefactoring(form, array);
addFormValidation.execute();


var usernameInput = new XpathProcessor().getXPath($("#username")[0]);
var resizeInput = new ResizeInputRefactoring(usernameInput, 80);
resizeInput.execute();

var linkToTop = new LinkToTopRefactoring();
linkToTop.execute();

var dateInInput = new XpathProcessor().getXPath($("#package-date-input")[0]);
var dateIntoSelects = new DateInputIntoSelectsRefactoring(dateInInput);
dateIntoSelects.execute();

var phone =  new XpathProcessor().getXPath($("p.header-phone")[0]);
var turnAttributeIntoLink = new TurnAttributeIntoLinkRefactoring(phone, "contacto.php");
turnAttributeIntoLink.execute();

var packageForm = new XpathProcessor().getXPath($("form[action='paquete.buscar.php']")[0]);
console.log(packageForm);
var addProcessingPage = new AddProcessingPageRefactoring(packageForm);
addProcessingPage.execute();


var selectInput = new XpathProcessor().getXPath($("select[name='children[]']")[0]);
var provideDefaultOption = new ProvideDefaultOptionRefactoring(selectInput, 3);
provideDefaultOption.execute();
