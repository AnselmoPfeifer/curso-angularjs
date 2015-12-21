app.controller("Controller07", function($scope){
    
    $scope.estados = ['RS', 'RJ', 'SC', 'SP','RR'];
    
    $scope.pessoa = novaPessoa();
    $scope.pessoas = [];
    
    $scope.salvarPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        $scope.pessoa = novaPessoa();
        $scope.form.$setUntouched();
        $scope.form.$setPristine();
    }
});

function novaPessoa(){
    return {
        nome : "",
        email : "",
        sexo : "f",
        estado : "SP"
    }
}