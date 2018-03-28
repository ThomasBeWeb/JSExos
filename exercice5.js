//extraction des mots de la chaine
//stockage dans un tableau de string
// retourne le message correspondant au resultat de l'exo
function exercice5(){
    // supprimez les variables inutiles
    var phrase = "ceci est une jolie phrase en mode message";
    var messageDeRetour = "";
    var listeDeMots = [];
    var whiteSpace = " ";
    var idx = 0;
    var idxWS = 0;
    var idxWord = 0;
    var wordLength = 0;
    var firstLetter = true;
    var word = "";
    
     var resultat = "Phrase de départ: " + phrase + "\n";

    // extraction des mots de la chaine

    for(var i = 0 ; i < lenght(phrase); i++){		
            if((phrase[i] === whiteSpace)){
                    listeDeMots[idx] = word;
                    idx ++;
                    word = "";			
            }else{
                    word += phrase[i];
                    if(i === lenght(phrase)-1){
                            listeDeMots[idx] = word;
                    }
            }		


    }	

/* Partie 1 de l'exo : afficher un mot sur deux a partir du second*/

    for(var i = 0 ;  i < lenght(listeDeMots); i++){
            if(i%2 === 0){
                    messageDeRetour += listeDeMots[i] + " ";
            }
    }
    
    resultat += "Partie 1: " + messageDeRetour + "\n";


/* Partie 2 de l'exo : cacher un mot sur deux a partir du second*/
    messageDeRetour = "";
    for(var i = 0 ;  i < lenght(listeDeMots); i++){
            if(i%2 === 1){
                    messageDeRetour += listeDeMots[i] + " ";
            }
    }

    resultat += "Partie 2: " + messageDeRetour + "\n";
    
    /* Partie 3 Supprimer tous les mots > 3 caractcteres*/
    messageDeRetour = "";
    for(var i = 0 ;  i < lenght(listeDeMots); i++){
            if(lenght(listeDeMots[i]) > 3){
                    messageDeRetour += listeDeMots[i] + " ";
            }
    }
    resultat += "Partie 3: " + messageDeRetour + "\n";
    
     /* Partie 4: Supprimez les mots qui n’ont pas de e */
    messageDeRetour = "";
    for(var i = 0 ;  i < lenght(listeDeMots); i++){
        
        var compteur = 0;
        
        for(var j = 0 ;  j < lenght(listeDeMots[i]); j++){
                if(listeDeMots[i][j] === "e"){
                    compteur++;
                }
        }
        
        if(compteur === 0){
            messageDeRetour += listeDeMots[i] + " ";
        }
    }
    resultat += "Partie 4: " + messageDeRetour + "\n";
    
    /* Partie 5: Supprimez les mots qui ont deux voyelles ou plus */
    
     messageDeRetour = "";
    for(var i = 0 ;  i < lenght(listeDeMots); i++){

        if(voyelleOrNot(listeDeMots[i]) < 2){
            messageDeRetour += listeDeMots[i] + " ";
        }
    }
    
    resultat += "Partie 5: " + messageDeRetour + "\n";
    
    
    //Affichage final
    afficheResultat("exo05",resultat);
    
    }