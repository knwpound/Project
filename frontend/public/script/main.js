import { handleCreateMember} from "./player.js";
import { handleCreateCoin } from "./coin.js";

document.addEventListener("DOMContentLoaded", () => {
  const addMemberButton = document.getElementById("player-confirm"); // Change this to the correct ID
  addMemberButton.addEventListener("click", () => {
    console.log("HI");
    handleCreateMember();
    handleCreateCoin();
  });
});