import app from 'flarum/app';

app.initializers.add('fof-custom-footer', () => {
  app.extensionData.for('fof-custom-footer')
    .registerSetting({
      label: app.translator.trans('fof-custom-footer.admin.settings.text'),
      setting: 'fof-custom-footer.text',
      type: 'text',
    })
    .registerSetting({
      label: app.translator.trans('fof-custom-footer.admin.settings.height'),
      setting: 'fof-custom-footer.height',
      placeholder: '50',
      type: 'number',
      simple: 'simple',
    })
    .registerSetting({
      label: app.translator.trans('fof-custom-footer.admin.settings.js'),
      setting: 'fof-custom-footer.js',
      type: 'text',
    })
});
