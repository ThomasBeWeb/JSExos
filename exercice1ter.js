function exercice1ter(){

    message = document.getElementById("textInput").value;
    
    taille = lenght(message);
    
    resultat = "";
    
    for( i = 0 ; i < taille ; i++){
        resultat += "caract " + message[i] + " position " + i +"\n";
    }
   
   afficheResultat("exo01",resultat);

}     