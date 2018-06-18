const AsyncWidgetLoader = require('./async-loader');

const widgetLoader = new AsyncWidgetLoader();
// this works
widgetLoader.initContentRequireEnsure();
// this fails
widgetLoader.initContent();