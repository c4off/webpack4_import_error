function AsyncLoader() {
};

// fails in wp4, but works in wp3
AsyncLoader.prototype.initContent = function() {
	import('./widget')
		.then((Widget) => {
			this.contentWidget = new Widget();
			console.log(this.contentWidget.getContent());
		});
};
// works in both
AsyncLoader.prototype.initContentRequireEnsure = function() {
	require.ensure('./widget', (require) => {
		const Widget = require('./widget');
		this.contentWidget = new Widget();
		console.log(this.contentWidget.getContent());
	}, 'async-widget')
};

export default AsyncLoader;