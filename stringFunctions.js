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

function toUpperCase(char) {
  var tableau =
          [
              ["a","A"],
              ["b","B"],
              ["c","C"],
              ["d","D"],
              ["e","E"],
              ["f","F"],
              ["g","G"],
              ["h","H"],
              ["i","I"],
              ["j","J"],
              ["k","K"],
              ["l","L"],
              ["m","M"],
              ["n","N"],
              ["o","O"],
              ["p","P"],
              ["q","Q"],
              ["r","R"],
              ["s","S"],
              ["t","T"],
              ["u","U"],
              ["v","V"],
              ["w","W"],
              ["x","X"],
              ["y","Y"],
              ["z","Z"]
          ];
  for (var j = 0; j < 2; j++)
  {
      for (var i = 0; i < 26; i++)
      {
          if (char === tableau[i][j])
          {
              return tableau[i][1];
          }
      }
  }
}