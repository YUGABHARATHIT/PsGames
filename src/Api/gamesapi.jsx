const API_KEY='d0e940072e7a46a69b71ac6b3eda2866';
export async function getGames(){
    const response=await fetch(`
        https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`);
        const data=await response.json();
        return data.results;
}