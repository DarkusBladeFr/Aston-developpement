import readlineSync from 'readline-sync';
function choose(list) {
    while(true) {
        console.log("1 - ajouter\n2 - retirer\n3 - visualier\n4 - quitter");
        var choice = parseInt(readlineSync.question("Que désirez-vous faire ?"));
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
            default:
                console.warn("saisissez un nombre entier entre 1 et 4 !");
                choose();
            break;
        }
    }
}
function add(list){
    var name = readlineSync.question("Quel est le nom de l'objet ?");
    var prix = readlineSync.question("Quel est son prix ?");
    var quantity = readlineSync.question(`Combien de ${name} en stock ?`);
    list.push([name,prix,quantity]);
}
function remove(list){
    var prodName = readlineSync.question("Quel produit voulez-vous supprimer ? ");
    let indexToRemove = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i][0] === prodName) {
            indexToRemove = i;
            break;
        }
    }
    if (indexToRemove !== -1) {
        list.splice(indexToRemove, 1);
        console.log("Le produit a été supprimé");
    } else {
        console.warn("Le produit indiqué n'existe pas");
    }
}
function show(list){
    list.forEach(element => {
        console.log(element);
    });
}
export default { choose };