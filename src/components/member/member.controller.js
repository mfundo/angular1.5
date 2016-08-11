
class MemberController {

	constructor($http){
		this.$http = $http;
	}

	$onInit() {
		console.log( 'member active ');
	}

	greet(name){
		console.log( `Hi ${name}, nice to see you again!` );
	}

}

MemberController.$inject = ['$http'];

export default MemberController;
