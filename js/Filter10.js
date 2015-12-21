/**
 * Created by anselmo on 20/12/15.
 */

app.filter('retornaSaudacao', function(){
    return function (nome){
        return "Ola " + nome + "!";
    }
});