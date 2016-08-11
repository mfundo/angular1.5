
import controller from './member.controller';

const memberComponent = {
	bindings: {
		member: '<'
	},
	controller,
	controllerAs: 'team',
	template: require('./index.html')

};

export default memberComponent;
