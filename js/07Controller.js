app.controller("07Controller", function($scope){
    $scope.estados ['RS', 'RJ', 'SC', 'SP'];
    
    $scope.pessoa = novaPessoa();
    
    console.log($scope.pessoa);
});

function novaPessoa(){
    return {
        nome : "",
        email : "",
        sexo : "f",
        estado : "SP"
    }
}