function swap(nom1, nom2) {
    nom1 = nom1 + nom2;
    nom2 = nom1 - nom2;
    nom1 = nom1 - nom2;
    console.log("Nom1 : " + nom1);
    console.log("Nom2 : " + nom2);
}
swap(34, 56);
