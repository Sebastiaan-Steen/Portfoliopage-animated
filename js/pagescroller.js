var target = document.getElementsByClassName("scrollertarget");
console.log(target);
var scrollcount = 0;

window.onscroll = function () {
    var targetElementOffset = target[scrollcount].offsetTop;
    var windowOffset = window.pageYOffset;

    console.log(scrollcount);

    if (windowOffset > targetElementOffset) {
        console.log('is scrolling down ', targetElementOffset + ' new position: ' + windowOffset);
        scrollToSection(target[scrollcount]);
    } else {
        console.log('is scrolling up', targetElementOffset + ' new position: ' + windowOffset);
        //scrollcount = scrollcount - 1;
        scrollToSection(target[scrollcount]);
    }
}

function scrollToSection(gotoSection) {
    console.log('gotoSection: ', gotoSection);
    var diff = (gotoSection.offsetTop - window.scrollY) / 8;
    if (Math.abs(diff)>1) {
        window.scrollTo(0, (window.scrollY + diff));
        clearTimeout(window._TO);
        window._TO = setTimeout(scrollToSection, 30, gotoSection);
    } else {
        window.scrollTo(0, gotoSection.offsetTop);
    }

    scrollcount = scrollcount + 1;
}
