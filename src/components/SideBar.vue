<template>
  <div class="side-bar-button-opening-container" v-show="$route.path == '/'">
    <button class="side-bar-button-opening" @click="handleInput">
      <img
        class="side-bar-button-opening__icon"
        src="@/assets/pictures/icon/icon_list--07.png"
      />
    </button>
  </div>
  <div
    class="gray-overlay"
    :class="{
      'gray-overlay--visible': modelValue,
      'gray-overlay--before-hidden': hiddenPhase == 1 && started,
      'gray-overlay--hidden': hiddenPhase == 2 || !started,
    }"
    @click="handleInput"
  ></div>
  <div
    class="side-bar"
    :class="{
      'side-bar--visible': modelValue,
      'side-bar--before-hidden': hiddenPhase == 1 && started,
      'side-bar--hidden': hiddenPhase == 2 || !started,
    }"
  >
    <div class="side-bar-button-closing-container">
      <button
        class="side-bar-button-closing"
        @click="handleInput"
        ref="closingButton"
      >
        <div class="side-bar-button-closing__icon"></div>
      </button>
    </div>
    <div class="side-bar-list">
      <button
        class="side-bar-list-item"
        v-for="(item, index) in sideBarList"
        :key="index"
        @click="goToRouter(item.routerLink)"
      >
        <img
          class="side-bar-list-item__icon"
          :src="require(`@/assets/pictures/icon/${item.iconLink}`)"
        />
        <span class="side-bar-list-item__name">{{ item.name }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      hiddenPhase: 0,
      started: false,
      sideBarList: [
        {
          name: "菜單",
          iconLink: "icon_menu-03-06.png",
          routerLink: "/menu",
        },
        {
          name: "品牌故事",
          iconLink: "icon_brandstory-03-06.png",
          routerLink: "/story",
        },
        {
          name: "加盟",
          iconLink: "icon_moneymoney-03-06.png",
          routerLink: "/joinus",
        },
        {
          name: "據點",
          iconLink: "icon_locatioon-03-02.png",
          routerLink: "/location",
        },
      ],
    };
  },
  props: ["modelValue"],
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  methods: {
    handleInput() {
      this.$emit("update:modelValue", !this.modelValue);
    },
    goToRouter(routerLink) {
      this.$refs.closingButton.click();
      this.$router.push(routerLink);
    },
  },
  mounted() {
    setTimeout(() => {
      this.started = true;
    }, 500);
  },
  watch: {
    modelValue: function (to) {
      if (to == false) {
        this.hiddenPhase = 1;
        setTimeout(() => {
          this.hiddenPhase = 2;
        }, 500);
      } else {
        this.hiddenPhase = 0;
      }
    },
  },
};
</script>
