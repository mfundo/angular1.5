
class FooterController {

	constructor($http){
		this.$http = $http;
		this.copy = 'Copyright @Applogix 2016.';
	}

	$onInit(){
		console.log( 'using global footer' );
	}

}

FooterController.$inject = ['$http'];

export default FooterController;
