<template>
  <div
    class="router-view-container"
    v-on:scroll.passive="getScrollingDirection"
    ref="routerViewContainer"
    v-if="loaded"
  >
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <TopBar
          v-model="sideBarIsOpened"
          :scrollingDirection="scrollingDirection"
        />
      </transition>
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
  <div
    class="loader"
    :class="{
      'loader--hidden-animation': loaded,
      'loader--hidden': loadingAnimationEnded,
    }"
  >
    <img
      class="loader__loading-animation"
      src="@/assets/pictures/loading/loading-chicken.gif"
    />
  </div>
  <SideBar v-model="sideBarIsOpened" />
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  components: {
    TopBar,
    SideBar,
  },
  data() {
    return {
      sideBarIsOpened: false,
      scrollingDirection: 0,
      lastScrollingPosition: 0,
      loaded: false,
      loadingAnimationEnded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 3000);
    setTimeout(() => {
      this.loadingAnimationEnded = true;
    }, 3500);
  },
  methods: {
    getScrollingDirection() {
      if (
        this.$refs.routerViewContainer.scrollTop - this.lastScrollingPosition >
        0
      ) {
        this.scrollingDirection = 1;
      } else if (
        this.$refs.routerViewContainer.scrollTop - this.lastScrollingPosition <
        0
      ) {
        this.scrollingDirection = -1;
      }
      this.lastScrollingPosition = this.$refs.routerViewContainer.scrollTop;
    },
  },
};
</script>

<style lang="scss">
@use "@/assets/scss/style.scss";
@import "~chiron-hei-hk-webfont/css/vf.css";

body {
  margin: 0;
}

#app {
  font-family: "Baoli", Avenir, Helvetica, Arial, sans-serif, "Chiron Hei HK WS";
  //font-weight: 900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
