let animateName = 'animated pulse';
let animationend = 'webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd';
let animatedClass = '.title';

$(animatedClass).mouseenter(function () {
    $(this).addClass(animateName);
});

$(animatedClass).on(animationend, function () {
    $(this).removeClass(animateName);
});