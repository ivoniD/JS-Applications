import { createHashRouter } from "./hashRouter.js";

        const views = {
            '#home': () => '<h2>Home Page</h2>',
            '#catalog': () => '<ul><li>Product 1</li><li>Product 2</li><li>Product 3</li></ul>',
            '#about': () => '<h2>About Us</h2>'
        }

        const main = document.querySelector('main');

        const start = createHashRouter(main, views)

        //Start Application
        start();

