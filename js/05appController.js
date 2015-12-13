app.controller('05appController', function ($scope) {
	$scope.tipo = "Curso On Line";
	$scope.curso = "Curso AngularJS";

	$scope.olaMundo = function(nome){
		alert("Ola " + nome + "!");
	}
	console.log("Executou o controller");
});