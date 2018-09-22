import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import CustomFooter from './components/CustomFooter';

app.initializers.add('fof/custom-footer', () => {
    extend(HeaderPrimary.prototype, 'init', function() {
        const footer = document.createElement('div');

        m.mount(document.body.appendChild(footer), CustomFooter.component());
    });
});
