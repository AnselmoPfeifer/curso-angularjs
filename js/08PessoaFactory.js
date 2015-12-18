/**
 * Created by anselmo on 17/12/15.
 */
app.factory('Pessoa', function(){

    console.log("Criou o objeto Pessoa!");

    var Pessoa  = function(){
        console.log("Instanciou o Objeto Pessoa!");
       this.nome = "Anselmo";
       this.idade = 35;
       this.saudacao = function(){
           return "Ola" + this.nome + "!";
       }
   }
    return Pessoa;
});