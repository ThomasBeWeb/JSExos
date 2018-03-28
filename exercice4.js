function exercice4(){
      
      message = "ceci est un texte assez long";
      
      //Creation d'une array recevant les positions, les mots, et leur longueur
       var messageArr = [];
       
       //Compteur de mots
       var compteur = 0;
      
      //Verif de chaque lettre et ajout
      for(i = 0 ; i < lenght(message) ; i++){
            
            newMot = "";
            
            if((i === 0) || (message[i] =! " ")){
                  
                  messageArr.push(i);
                  while(message[i] != " " || i < lenght(message)) {
                        newMot += message[i];
                        i++;
                  }
                  
                  messageArr.push(newMot);
                  messageArr.push(lenght(newMot));
                  compteur++;
                  
            }
      }
      
      //Affichage du résultat
      afficheResultat("exo03",newMessageToString);
}