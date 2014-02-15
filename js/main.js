require.config({

	paths: {
		'jquery' : 'libs/jquery-1.11.0.min',
		'backbone' : 'libs/backbone-1.1.1',
		'bootstrap' : 'libs/bootstrap',
		'underscore' : 'libs/underscore-1.6.0'		
			
	},

	shim: {
		'underscore' : {
			exports: '_'
		},
		'backbone' : {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap' : {
			deps: [
				'jquery'
			]
		}
	}

});

require([
	'jquery','backbone','bootstrap','underscore'
], function($, Backbone, Bootstrap, _){
	'use strict';

	console.log($);
	console.log(Backbone);
	console.log(_)
});