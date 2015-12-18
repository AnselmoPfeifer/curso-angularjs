/**
 * Created by anselmo on 17/12/15.
 */
app.service('operacoes', function(){

    console.log("Criou o service Operacoes");

   this.somar = function(valor1, valor2){
       return valor1 + valor2;
   };

    this.subtrair = function(valor1, valor2){
        return valor1 - valor2;
    };
});
