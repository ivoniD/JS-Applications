export function createHashRouter(main, views) {

    window.addEventListener('hashchange', onChange);

    function onChange() {
        const hash = window.location.hash;
        const view = views[hash];

        if (typeof view == 'function') {
            main.innerHTML = view();
        }
    }

    return onChange;

}

