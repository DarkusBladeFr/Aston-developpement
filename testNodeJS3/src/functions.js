var readlineSync = require('readline-sync');
function choose() {
    console.log("1 - ajouter\n2 - retirer\n3 - visualier");
    var choice = readlineSync.question("Que désirez-vous faire ?");
    switch(choice) {
        case 1:
            add(list);
            break;
        case 2:
            remove(list);
            break;
        case 3:
            show(list);
            break;
        case 4:
            return;
        console.warn("saisissez un nombre entier entre 1 et 4 !");
        choose();
    }
}
function add(list){
    var name = readlineSync.question("Quel est le nom de l'objet ?");
    var prix = readlineSync.question("Quel est son prix ?");
    var quantity = readlineSync.question(`Combien de ${name} en stock ?`);
    list.push([name,prix,quantity]);
}
function remove(list){
    var prodNum = readlineSync.question("Quel produit voulez-vous supprimer ?");
    let exist = false;
    list.forEach(ligne => {
        ligne.forEach(element => {
            if(element == prodNum) exist = true;
        });
    });
    if(exist) {
        list.pop(prodNum);
        console.log("Le produit a été supprimé")
    } else {
        console.warn("Le produit indiqué n'existe pas");
    }
}
function show(){}