export const defaults = {
    el: document,
    wrapper: window,
    name: 'scroll',
    offset: [0, 0],
    repeat: false,
    smooth: true,
    initPosition: { x: 0, y: 0 },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: true,
    class: 'is-inview',
    scrollingClass: 'has-scroll-scrolling',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 3,
    resetNativeScroll: true,
    tablet: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 1024
    },
    smartphone: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical'
    }
};
