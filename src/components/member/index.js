
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MemberComponent from './member.component';
import MemberService from '../team/team.service';

const member = angular
	.module('member', [
		uiRouter
	])
	.service('MemberService', MemberService)
	.component('member', MemberComponent)
	.config( ($stateProvider, $urlRouterProvider) => {

		'use strict';

		$stateProvider
			.state('member', {
				url: '/team/{memberName}',
				component: 'member',
				resolve: {
					member: (MemberService, $transition$) => MemberService.getMember( $transition$.params().memberName )
				}
			});

		$urlRouterProvider.otherwise('/');

	} )
	.name;

export default member;
