app.controller("Controller06", function($scope){
	$scope.nomes = ['Anselmo', 'Jooa', 'Pedro','Maria'];

	$scope.pessoas = [];
	$scope.pessoas.push(
		{ nome: "Anselmo Pfeifer", idade : 35, status : false }
	);

	$scope.pessoas.push(
		{ nome: "Pfeifer Anselmo", idade : 35, status : false }
	);

	$scope.pessoas.push(
		{ nome: "Pfeifer", idade : 35, status : false }
	);

	$scope.pessoas.push(
		{ nome: "Anselmo", idade : 35, status : false }
	);

	console.log($scope.nomes);
	console.log($scope.pessoas);

	$scope.adicionarPessoa = function(){
		var nome = document.getElementById("nomepesssoa");
		var idade = document.getElementById('idadepessoa');

		$scope.pessoas.push(
			{nome : nome.value, idade : idade.value }
		);
		nome.value = "";
		idade.value = "";
	}
	
});