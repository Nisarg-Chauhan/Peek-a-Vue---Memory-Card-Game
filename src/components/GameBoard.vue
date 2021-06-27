<script>
import Card from "./Card";

export default {
  //   Gameboard components and props
  components: {
    Card,
  },
  props: {
    cardList: {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const selectCard = (payload) => {
      ctx.emit("flip-card", payload);
    };

    return {
      selectCard,
    };
  },
};
</script>

<!-- Display a grid of cards on the game board-->
<template>
  <transition-group tag="section" class="game-board" name="shuffle-card">
    <Card
      v-for="card in cardList"
      :key="`${card.value}-${card.variant}`"
      :matched="card.matched"
      :value="card.value"
      :visible="card.visible"
      :position="card.position"
      @select-card="selectCard"
    />
  </transition-group>
  <h2 class="status">{{ status }}</h2>
</template>

<style></style>
