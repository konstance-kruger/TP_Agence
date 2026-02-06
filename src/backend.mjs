import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090/');

// toute la liste
/*
try {
    const records = await pb.collection('Maison').getFullList();
    console.table(records);
} catch (e) {
    console.error(e);
}
*/
// pour un identifiant spécifique

/*
try {
    const Maison = await pb.collection('Maison').getOne('ekyz78xq6lgqymg');
    console.table(Maison);
} catch (e) {
    console.error(e);
}
*/

//trié par date de création

/*
try {
    const records = await pb.collection('Maison').getFullList({ sort: 'created' });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/
//trié par date de création (ordre décroissant)
/*
try {
    const records = await pb.collection('Maison').getFullList({ sort: '-created' });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// afficher toutes les maisons en favori
/*
try {
    const records = await pb.collection('Maison').getFullList({ filter: 'favori = true' });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// afficher toutes les maisons avec superficie > 100
/*
try {
    const records = await pb.collection('Maison').getFullList({ filter: 'surface > 100' });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// afficher toutes les maisons avec superficie > 100 et au moins 2 salles de bains
/*
try {
    const records = await pb.collection('Maison').getFullList({ filter: 'surface > 100 && nb_sdb >= 2' });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// afficher toutes les maisons avec superficie > 100 ou au moins 3 chambres
/*
try {
    const records = await pb.collection('Maison').getFullList({ filter: 'surface > 100 || nb_chambres >= 3' });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// afficher toutes les maisons ordonnées par ordre croissant de leur nom

/*
try {
    const records = await pb.collection('Maison').getFullList({ sort: 'nom_maison' });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// afficher la maison ayant un nom donné
/*
try {
    const nomRecherche = 'Maison blanche';
    const records = await pb.collection('Maison').getFullList({ filter: `nom_maison = "${nomRecherche}"` });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/

// afficher toutes les maisons dont le nom est différent d'un nom donné, ordonnées par nom croissant
/*
try {
    const nomExclu = 'Maison blanche';
    const records = await pb.collection('Maison').getFullList({
        filter: `nom_maison != "${nomExclu}"`,
        sort: 'nom_maison'
    });
    console.table(records);
} catch (e) {
    console.error(e);
}
*/
