export const showGameStartModal = () => {
    const modal = document.createElement("div") as HTMLElement;
    modal.classList.add("modal");
    modal.innerHTML = `
    
    <h2>ZooWalk - Zoo park management game</h2>
    <p>The main goal of this game is to develop a successful zoo park . You do that by acquiring new animals for the zoo, hiring employees to take care of the animals and the zoo itself. By making your park more appealing you will atract more customers, thus earning you more money 🤑🤑🤑!</p>
    <form id="game-start-form" type="submit">
    <p>To start the game name your Zoo park</p>
    <input type="text" placeholder="Zoo name" required>
    <button>Start</button>
    </form>
    `
    const modalBackground = document.createElement("div") as HTMLElement;
    modalBackground.classList.add("background");
    document.body.append(modalBackground, modal);
    const gameStartForm = document.getElementById("game-start-form") as HTMLFormElement;
    gameStartForm.addEventListener("submit", (e:SubmitEvent)=>{
        e.preventDefault();
        modal.remove();
        modalBackground.remove();
    }) 
};
