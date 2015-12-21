app.controller('Controller08', ['$scope', 'operacoes',
    'Pessoa', function($scope, operacoes, Pessoa){
    $scope.pessoa = new Pessoa();

    console.log("Entrou no controller 08");
    console.log("Soma de 10 + 10");
    console.log(operacoes.somar(10, 10));
}]);

app.controller('Controller082', ['$scope', 'operacoes', 'Pessoa',
    function($scope, operacoes, Pessoa){
    console.log("Entrou no controller 08-2");
    console.log("Subtrair de 5 de 10");
    console.log(operacoes.subtrair(10,5));

    $scope.outrapessoa = new Pessoa();
        $scope.outrapessoa.nome = "Novo Nome";
}]);