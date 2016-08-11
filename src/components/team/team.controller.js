
class TeamController {

	constructor($http){
		this.$http = $http;
	}

	$onInit() {
		console.log( 'team running ');
	}

}

TeamController.$inject = ['$http'];

export default TeamController;
