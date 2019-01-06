import app from 'flarum/app';
import CustomFooterSettingsModal from './components/CustomFooterSettingsModal';

app.initializers.add('fof-custom-footer', () => {
    app.extensionSettings['fof-custom-footer'] = () => app.modal.show(new CustomFooterSettingsModal());
});
