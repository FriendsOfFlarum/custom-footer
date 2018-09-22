import SettingsModal from 'flarum/components/SettingsModal';

export default class CustomFooterSettingsModal extends SettingsModal {
    className() {
        return 'CustomFooterSettingsModal Modal--medium';
    }

    title() {
        return app.translator.trans('fof-custom-footer.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <label>{app.translator.trans('fof-custom-footer.admin.settings.text')}</label>
                <textarea rows="5" required className="FormControl" type="text" bidi={this.setting('fof-custom-footer.text')} />
            </div>,

            <div className="Form-group">
                <label>{app.translator.trans('fof-custom-footer.admin.settings.height')} (px)</label>
                <input className="FormControl" type="number" placeholder="50" bidi={this.setting('fof-custom-footer.height')} />
            </div>,

            <div className="Form-group">
                <label>{app.translator.trans('fof-custom-footer.admin.settings.js')}</label>
                <textarea rows="5" className="FormControl" type="text" bidi={this.setting('fof-custom-footer.js')} />
            </div>,
        ];
    }
}
