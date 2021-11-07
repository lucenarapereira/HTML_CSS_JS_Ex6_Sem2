function AskingName(){

    var lastName = prompt("Qual é o seu sobrenome?");
    while(lastName=="")
            {
                lastName = prompt("Por gentileza, preencha seu sobrenome.");
            }

    var name = prompt("Qual é o seu nome?");
    while(name=="")
            {
                name = prompt("Por gentileza, preencha seu nome.");
            }
      
    var mensagem = `Olá, ${name} ${lastName}!`;
    
    window.alert(mensagem);    
   
    }