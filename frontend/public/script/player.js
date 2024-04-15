import { createPlayer, deletePlayer, getPlayers,movePlayer } from "./api.js";
import { getRandomSafeSpot } from "./utils.js";
const gameContainer = document.querySelector(".game-container");

export async function handleCreateMember() {
    const label = document.getElementById("player-name");
    const value = label.value;
    console.log("Input Value:", value);

    const {x,y} = getRandomSafeSpot();
  const payload = {
    name: value,
    color: 'red',
    score:0,
    x:x,
    y:y,
  };

  const playerId = await createPlayer(payload);
  console.log("Player ID:", playerId);
  label.value = "";

  const characterElement = document.createElement("div");
  characterElement.classList.add("Character", "grid-cell");
  characterElement.classList.add("you");
  characterElement.innerHTML = (`
        <div class="Character_shadow grid-cell"></div>
        <div class="Character_sprite grid-cell"></div>
        <div class="Character_name-container">
          <span class="Character_name"></span>
          <span class="Character_coins">0</span>
        </div>
        <div class="Character_you-arrow"></div>
  `);
      //playerElements[addedPlayer.id] = characterElement;

      //Fill in some initial state
      characterElement.querySelector(".Character_name").innerText = value;
      characterElement.querySelector(".Character_coins").innerText = 0;
      characterElement.setAttribute("data-color", 'red');
      //characterElement.setAttribute("data-direction", addedPlayer.direction);
      const left = 16 * x + "px";
      const top = 16 * y - 4 + "px";
      characterElement.style.transform = `translate3d(${left}, ${top}, 0)`;
      gameContainer.appendChild(characterElement);

      gameContainer.addEventListener("click", (event) => {
        const rect = gameContainer.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        
        // Calculate new position based on click coordinates
        const newX = Math.floor(offsetX / 16);
        const newY = Math.floor(offsetY / 16);

        // Move the player to the new position
        movePlayer(playerId, newX, newY);
    });
}