
import angular from 'angular';
import team from './team';
import member from './member';

const components = angular
  .module('applogix.components', [
	  team,
      member
  ])
  .name;

export default components;
