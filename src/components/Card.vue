<script>
import { computed } from "vue";

export default {
  // Define props for the Card
  props: {
    matched: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },

  //Selects a card when user clicks on it
  setup(props, context) {
    // eslint-disable-next-line vue/return-in-computed-property
    const flippedStyles = computed(() => {
      if (props.visible) {
        return "is-flipped";
      }
    });

    //Emit the cards position and its value
    const selectCard = () => {
      context.emit("select-card", {
        position: props.position,
        faceValue: props.value,
      });
    };

    return {
      flippedStyles,
      selectCard,
    };
  },
};
</script>

<!-- Card Template -->
<template>
  <div class="card" :class="flippedStyles" @click="selectCard">
    <div class="card-face is-front">
      <img
        class="card-image"
        :srcset="`/images/${value}@2x.png 2x, /images/${value}.png 1x`"
        :src="`/images/${value}.png`"
        :alt="value"
      />
      <img v-if="matched" src="/images/checkmark.svg" class="icon-checkmark" />
    </div>
    <div class="card-face is-back"></div>
  </div>
</template>

<!-- Add styling to the card -->
<style>
.card {
  position: relative;
  transition: 0.5s transform ease-in;
  transform-style: preserve-3d;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
}

.card-face.is-front {
  background-image: url("/images/card-bg.png");
  color: white;
  transform: rotateY(180deg);
}

.card-face.is-back {
  background-image: url("/images/card-bg-empty.png");
  color: white;
}

.card-image {
  max-width: 100%;
}

.icon-checkmark {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>
