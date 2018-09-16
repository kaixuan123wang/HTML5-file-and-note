var $ = function(sel) {
    return document.querySelectorAll(sel);
};
var l = $('.ad>li');
var o = $('.ad>li');
var init = function() {
    for (var i = 0; i < l.length; i++) {
        l[i].style.display = "none";
        o[i].style.background = "#f00";
    }
}
var showPic = function(i) {
    init();
    l[i].style.display = "block";
    o[i].style.background = "#ff0";
}
for (var i = 0; i < o.length; i++) {
    o[i].index = i;
    o[i].onmouseover = function(e) {
        showPic(this.index);
    }
}
var n = 0,
    timer = null;
var autoplay = function() {
    if (n < o.length) {
        showPic(n);
        n += 1;
    } else {
        n = 0;
    }
    timer = setTimeout(autoplay, 500);
}
autoplay();
for (var i = 0; i < o.length; i++) {
    $('.inner')[i].onmouseover = function(e) {
        window.clearTimeout(timer);
    }
    $('.inner')[i].onmouseout = function(e) {
        autoplay();
    }
}