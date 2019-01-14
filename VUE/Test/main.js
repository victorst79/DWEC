Vue.component('mytag',{
	template: '<h1>This test its from mytag</h1>'
});

var mainApp = new Vue({
	el: '#mainApp',
	data: {
		test: 'Test',
		seetag: false,
		text: 'Google',
		url: 'https://www.google.com/'
	}
});