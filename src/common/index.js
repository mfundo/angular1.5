
import angular from 'angular';
import footer from './footer/index.js';

const common = angular
  .module('applogix.common', [
	  footer
  ])
  .name;

export default common;
