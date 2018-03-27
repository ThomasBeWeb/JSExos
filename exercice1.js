function exercice1(){

    message = "hello world !";
    
    taille = lenght(message);
    
    resultat = "";
    
    for( i = 0 ; i < taille ; i++){
        resultat += "caract " + message[i] + " position " + i +"\n";
    }
    
    afficheResultat("exo01",resultat);
}