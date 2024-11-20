async function loadDecks() {
    try {
        const response=await  fetch("http://localhost:5000/decks/read");
        if(!response.ok){
            console.log(response.statusText);
        }else {
            return await response.json();
        }
    }catch (e) {
       console.log(e.message);
    }
}
export default loadDecks;