import { extend } from 'flarum/extend';
import Application from 'flarum/Application';

import CustomFooter from './components/CustomFooter';

app.initializers.add('fof-custom-footer', () => {
    extend(Application.prototype, 'mount', () => {
        const footer = document.createElement('div');

        m.mount(document.body.appendChild(footer), CustomFooter.component());
    });
});
