
function LinkToTopRefactoring() {

}

LinkToTopRefactoring.prototype = new UsabilityRefactoring();

LinkToTopRefactoring.prototype.constructor = LinkToTopRefactoring;

LinkToTopRefactoring.prototype.transform = function () {
    $("body").append('<a id="scroller" style="display:block;position:fixed;bottom:30px;right:30px;width:35px;height:35px;cursor:pointer;background: url(https://selfrefactoring.s3.amazonaws.com/resources/refactorings/totop.png) no-repeat;display:none"></a>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) { $('#scroller').fadeIn(); } else { $('#scroller').fadeOut(); }
    });
    $('#scroller').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 400);
        return false;
    });
};

LinkToTopRefactoring.getView = function () {
    return RefactoringView;
};

LinkToTopRefactoring.getName = function () {
    return "Link to Top Refactoring";
}