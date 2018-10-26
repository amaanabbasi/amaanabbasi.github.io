let animateName = "animated pulse";
let animationend = "webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd";
let animatedClass = ".title";
$(animatedClass).mouseenter(function(event){
    $(this).addClass(animateName);
});
$(animatedClass).on(animationend, function(event) {
    $(this).removeClass(animateName);
});
