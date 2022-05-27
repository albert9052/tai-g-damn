<template>
  <div
    class="top-bar"
    :class="{ 'top-bar--visible': show, 'top-bar--hidden': !show }"
    v-if="$route.path != '/'"
  >
    <div class="top-bar__bottom-line"></div>
    <button class="side-bar-button-logo" @click="goToMainPage">
      <img
        class="side-bar-button-logo__icon"
        src="@/assets/pictures/logo/logo_2small-05.png"
      />
    </button>
    <div class="side-bar-button-opening-container">
      <button class="side-bar-button-opening" @click="handleInput">
        <img
          class="side-bar-button-opening__icon"
          src="@/assets/pictures/icon/icon_list--07.png"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      show: 0,
    };
  },
  props: ["modelValue", "scrollingDirection"],
  methods: {
    handleInput() {
      this.$emit("update:modelValue", !this.modelValue);
    },
    goToMainPage() {
      this.$router.push("/");
    },
  },
  watch: {
    scrollingDirection: function (to) {
      if (to == 1) {
        this.show = false;
      } else if (to == -1) {
        this.show = true;
      }
    },
  },
};
</script>
