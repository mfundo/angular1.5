
import angular from 'angular';
import FooterComponent from './footer.component.js';

const footer = angular
	.module('footer', [])
	.component('footer', FooterComponent)
	.name;

export default footer;
