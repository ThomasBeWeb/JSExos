function exercice4bis(){
      
      message = document.getElementById("textInput").value;
      
      //Creation d'une array recevant les positions, les mots, et leur longueur
       var messageArr = [];
       
       //Compteur de mots
       var compteur = 0;
      
      //Verif de chaque lettre et ajout
      for(i = 0 ; i < lenght(message) ; i++){
            
            newMot = "";
            
            if((i === 0) || (message[i] !== " ")){
                  
                  messageArr.push(i);
                  while((message[i] !== " ") && (i < lenght(message))) {
                        newMot += message[i];
                        i++;
                  }
                  
                  messageArr.push(newMot);
                  messageArr.push(lenght(newMot));
                  compteur++;
                  
            }
      }
      
      
      var messageToScreen = "La phrase " + message + " contient " + compteur + " mots \n";
     
      
      for(i = 0 ; i < messageArr.length ; i = i + 3){
          
          messageToScreen += "Le mot " + messageArr[(i+1)] + " commence en " + (messageArr[i] + 1) + " et contient " + messageArr[(i + 2)] + " lettres \n";
      }
      
      //Affichage du résultat
      afficheResultat("exo04",messageToScreen);
}