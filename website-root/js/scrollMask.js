function smoothScrollPosition(scroll) {
    return scroll * scroll * (3 - 2 * scroll);
}

document.addEventListener('scroll', function() {
    let rawScrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    let smoothScroll = smoothScrollPosition(rawScrollPosition);

    let scrollPosition = smoothScroll * 100;

    document.documentElement.style.setProperty('--scroll', scrollPosition + '%');
});

let defaultScrollPosition = 0;
document.documentElement.style.setProperty('--scroll', defaultScrollPosition + '%');
