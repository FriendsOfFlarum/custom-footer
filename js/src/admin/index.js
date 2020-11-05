import app from 'flarum/app';
import { settings } from '@fof-components';

const {
    SettingsModal,
    items: { StringItem, BooleanItem, NumberItem },
} = settings;

app.initializers.add('fof-custom-footer', () => {
    app.extensionSettings['fof-custom-footer'] = () =>
        app.modal.show(SettingsModal, {
            title: app.translator.trans('fof-custom-footer.admin.settings.title'),
            size: 'medium',
            items: s => [
                <div className="Form-group">
                    <label>{app.translator.trans('fof-custom-footer.admin.settings.text')}</label>
                    <StringItem setting={s} name="fof-custom-footer.text" simple/>
                </div>,
                <div className="Form-group">
                    <label>{app.translator.trans('fof-custom-footer.admin.settings.height')} (px)</label>
                    <NumberItem setting={s} name="fof-custom-footer.height" simple placeholder="50"/>
                </div>,
                <div className="Form-group">
                    <label>{app.translator.trans('fof-custom-footer.admin.settings.js')}</label>
                    <StringItem setting={s} name="fof-custom-footer.js" simple />
                </div>,
            ]
        });
});
