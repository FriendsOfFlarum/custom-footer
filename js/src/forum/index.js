import { extend } from 'flarum/common/extend';
import ForumApplication from 'flarum/common/ForumApplication';

import CustomFooter from './components/CustomFooter';

app.initializers.add('fof-custom-footer', () => {
    extend(ForumApplication.prototype, 'mount', () => {
        const footer = document.createElement('div');

        m.mount(document.body.appendChild(footer), CustomFooter);
    });
});
