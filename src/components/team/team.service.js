
class TeamService {

	constructor ( $http) {

		this.$http = $http;

	}

	getTeam () {
		return this.$http.get( './src/content.json' ).then( response => response.data );
	}

	getMember(name){

		return new Promise( (resolve, reject) => {

		    this.$http.get( './src/content.json' ).then( (response) => {

			    if(response.status === 200){

				    for (let member of response.data) {
					    if (member.name == name) {
						    resolve(member);
					    }
				    }

			    } else {
				    reject(response.statusText);
			    }

			});

		 });

	}

}

TeamService.$inject = ['$http'];

export default TeamService;
