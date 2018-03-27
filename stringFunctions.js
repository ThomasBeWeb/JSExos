function afficheResultat(id,texte){
    
    console.log(texte);

    var div = document.getElementById(id);
    
    for (var i = 0; i < div.children.length; i++) {
        if(div.children[i].tagName === "DIV"){;
            div.children[i].innerHTML = texte;
        }
    }
    
}

function lenght(chaine) {
    var longueur = 0;

    while (true) {
        if (chaine[longueur] !== undefined) {
            longueur++;
        } else {
            break;
        }
    }
    return longueur;
}