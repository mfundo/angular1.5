
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TeamComponent from './team.component';
import TeamService from './team.service';

const team = angular
	.module('team', [
		uiRouter
	])
	.service('TeamService', TeamService)
	.component('team', TeamComponent)
	.config( ($stateProvider, $urlRouterProvider) => {

		'use strict';

		$stateProvider
			.state('team', {
				url: '/team',
				component: 'team',
				resolve: {
					list: TeamService => TeamService.getTeam()
				}
			});

		$urlRouterProvider.otherwise('/');

	} )
	.name;

export default team;
