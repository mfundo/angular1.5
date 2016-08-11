import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppComponent from './app.component';
import Components from './components';
import Common from './common';

const root = angular
	.module( 'applogix', [
		uiRouter,
		Components,
		Common
	])
	.component( 'applogix', AppComponent )
	.name;

angular.bootstrap( document, [ 'applogix' ] );

export default root;
