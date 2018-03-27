function exercice2(){
      
      message = "bonjour a tous !";
      
      nbSpaces = 0;
      nbO = 0;
      
      for(i = 0 ; i < lenght(message) ; i++){
            
            if(message[i] === " "){
                  nbSpaces++;
            }else if(message[i] === "o"){
                  nbO++;
            }             
      }
      
      resultat = "Dans la chaine " + message + " il y a: \n" + nbSpaces + " espaces et " + nbO + " fois la lettre o";
      
      afficheResultat("exo02",resultat);
}