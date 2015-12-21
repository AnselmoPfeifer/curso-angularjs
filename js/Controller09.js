/**
 * Created by anselmo on 17/12/15.
 * Novas formas de criar Controller
 */
function Controller09($scope, retornaSaudacaoFilter){
    console.log("Iniciando o Controller");
    console.log(retornaSaudacaoFilter('Anselmo'));

    $scope.pessoa = {
        nome : "Anselmo Pfeifer",
        idade : 35
    }
}
app.controller('Controller09', Controller09);