import _ from "lodash";
import { computed, ref } from "vue";

//Pass the card deck as a parameter and create a new game
export default function createGame(deck) {
  const newPlayer = ref(true);

  const startGame = () => {
    newPlayer.value = false;

    restartGame();
  };

  //Restart the game and shuffle the cards
  const restartGame = () => {
    deck.value = _.shuffle(deck.value);

    deck.value = deck.value.map((card, index) => {
      return {
        ...card,
        matched: false,
        position: index,
        visible: false,
      };
    });
  };

  //If 8 card matches are found then player wins the game. Otherwise, total number of
  //matches is shown
  const status = computed(() => {
    if (matchesFound.value === 8) {
      return "Player wins!";
    } else {
      return `Matches found: ${matchesFound.value}`;
    }
  });

  //Find the number of matches
  const matchesFound = computed(() => {
    const matchedCards = deck.value.filter((card) => card.matched === true)
      .length;

    return matchedCards / 2;
  });

  return {
    matchesFound,
    newPlayer,
    restartGame,
    startGame,
    status,
  };
}
