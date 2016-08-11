
import controller from './team.controller';

const teamComponent = {

	controller,
	controllerAs: 'team',
	bindings: {
		list: '<'
	},
	template: require('./index.html')

};

export default teamComponent;
