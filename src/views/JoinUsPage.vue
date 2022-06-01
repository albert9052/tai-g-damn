<template>
  <div class="join-us-page">
    <div class="join-us-page-title">
      <img
        class="join-us-page-title__icon"
        src="@/assets/pictures/icon/icon_moneymoney-03-06.png"
      />
      <span class="join-us-page-title__name">加盟</span>
    </div>
    <div class="join-us-page-content">
      <div class="join-us-page-side-panel">
        <div class="join-us-page-side-panel__indicator-container">
          <div
            class="join-us-page-side-panel__dot join-us-page-side-panel__dot--1"
            :class="{
              'join-us-page-side-panel__dot--chosen':
                $route.path == '/joinus' || $route.path == '/joinus/sharedcase',
            }"
          ></div>
          <div
            class="join-us-page-side-panel__dot join-us-page-side-panel__dot--2"
            :class="{
              'join-us-page-side-panel__dot--chosen':
                $route.path == '/joinus/joiningrequirements',
            }"
          ></div>
          <div
            class="join-us-page-side-panel__dot join-us-page-side-panel__dot--3"
            :class="{
              'join-us-page-side-panel__dot--chosen':
                $route.path == '/joinus/joiningform',
            }"
          ></div>
          <div
            class="join-us-page-side-panel__dot join-us-page-side-panel__dot--4"
            :class="{
              'join-us-page-side-panel__dot--chosen':
                $route.path == '/joinus/joiningprocess',
            }"
          ></div>
          <div
            class="join-us-page-side-panel__line join-us-page-side-panel__line--1-2"
            :class="{
              'join-us-page-side-panel__line--chosen':
                $route.path == '/joinus' || $route.path == '/joinus/sharedcase',
            }"
          ></div>
          <div
            class="join-us-page-side-panel__line join-us-page-side-panel__line--2-3"
            :class="{
              'join-us-page-side-panel__line--chosen':
                $route.path == '/joinus/joiningrequirements',
            }"
          ></div>
          <div
            class="join-us-page-side-panel__line join-us-page-side-panel__line--3-4"
            :class="{
              'join-us-page-side-panel__line--chosen':
                $route.path == '/joinus/joiningform',
            }"
          ></div>
        </div>
        <div class="join-us-page-side-panel__name-container">
          <div class="join-us-page-side-panel__name-wrapper">
            <router-link
              class="join-us-page-side-panel__name"
              to="/joinus/sharedcase"
              >加盟主分享</router-link
            >
          </div>
          <div class="join-us-page-side-panel__name-wrapper">
            <router-link
              class="join-us-page-side-panel__name"
              to="/joinus/joiningrequirements"
              >加盟條件</router-link
            >
          </div>
          <div class="join-us-page-side-panel__name-wrapper">
            <!--
            <router-link
              class="join-us-page-side-panel__name"
              to="/joinus/joiningform"
              >加盟表單</router-link
            >
					-->
            <a
              class="join-us-page-side-panel__name"
              href="https://forms.gle/WjNaFToTk6mawMB19"
              >加盟表單</a
            >
          </div>
          <div class="join-us-page-side-panel__name-wrapper">
            <router-link
              class="join-us-page-side-panel__name"
              to="/joinus/joiningprocess"
              >加盟流程</router-link
            >
          </div>
        </div>
      </div>
      <div class="join-us-page-content__child">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinUsPage",
  data() {
    return {};
  },
  methods: {},
};
</script>
