import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allMaisons() {
const records = await pb.collection('Maison').getFullList() ;
return records ;
}

export async function OneId(id) {
const records = await pb.collection('Maison').getOne(id) ;
return records ;
}

export async function allMaisonsFavori() {
const records = await pb.collection('Maison').getFullList({ filter: 'favoris = true' }

) ;
return records ;
}

export async function allMaisonsSorted() {
const records = await pb.collection('Maison').getFullList({ sort: 'created' }) ;
return records ;
}

export async function bySurface() {
const records = await pb.collection('Maison').getFullList({ sort: 'surface' }) ;
return records ;
}

export async function surfaceORprice(surface, prix) {
    const records = await pb.collection("Maison").getFullList({ filter: `surface > ${surface} || prix < ${prix}` });
    return records;
}

export async function agentById(id) {
    const records = await pb.collection("Agent").getOne(id);
    return records;
}

export async function allMaisonsAgents() { 
    const records = await pb.collection('Maison').getFullList(); 
    return records; 
}

export async function allMaisonsByAgentId(id) { 
    const records = await pb.collection('Maison').getFullList({ filter: `agent="${id}"` }); 
    return records; 
}

export async function allMaisonsByAgentName(Nom) {
    const agent = await pb.collection('Agent').getFirstListItem(`Nom="${Nom}"`);
    const records = await pb.collection('Maison').getFullList({ filter: `agent="${agent.id}"` }); 
    return records; 
}
export async function allMaisonsSortedAgents() { 
    const records = await pb.collection('Maison').getFullList({ sort: 'agent' }); 
    return records; 
}

export async function bySurfaceAgent(surface, agentId) {
    const records = await pb.collection('Maison').getFullList({ filter: `surface > ${surface} && agent="${agentId}"` }); 
    return records; 
}

export async function maisonFavoriAgent(agentId) {
    const records = await pb.collection('Maison').getFullList({ filter: `favori = true && agent="${agentId}"` }); 
    return records; 
}