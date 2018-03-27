function exercice3(){
      
      message = "ceci est un texte assez long";
      
      //Creation d'un tableau de même taille
      newMessage = new Array(lenght(message) );
      
      //String recevant chaque lettre de newMessage
      newMessageToString = "";
      
      //Verif de chaque lettre et changements
      for(i = 0 ; i < lenght(message) ; i++){
            
            if(message[i] === "e"){
                  newMessage[i] = "E";
                  
            }else if(message[i] === " "){
                  newMessage[i] = "-";
                  
            }else if(i === 0){
                  newMessage[i] = message[i].toUpperCase();
                  
            }else if(i != 0 && newMessage[i-1] === "-"){
                  newMessage[i] = message[i].toUpperCase();
                  
            }else{
                  newMessage[i] = message[i];
            }
            
            newMessageToString += newMessage[i];
      }
      
      //Affichage du résultat
      afficheResultat("exo03",newMessageToString);
}