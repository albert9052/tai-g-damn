<template>
  <div class="main-page">
    <div
      class="parallax"
      v-on:scroll.passive="getScrollingPosition"
      ref="parallax"
    >
      <div class="parallax__group">
        <img
          class="main-page__background-image parallax__layer parallax__layer--deep"
          src="@/assets/pictures/background/mainBackground.jpg"
        />
        <div
          class="logo-section parallax__layer parallax__layer--back"
          :style="{ opacity: 1 - logoSectionWhiteOpacity }"
        >
          <img
            class="logo-section__logo-image"
            src="@/assets/pictures/logo/logo_1big.png"
          />
        </div>
        <div
          class="main-page__black-filter parallax__layer parallax__layer--deep"
          :style="{ opacity: logoSectionWhiteOpacity }"
        ></div>
      </div>
      <div class="parallax__group parallax__group--second">
        <div class="news-section parallax__layer parallax__layer--base">
          <div class="title">
            <img
              class="title__logo-image"
              src="@/assets/pictures/icon/icon_news-03-06.png"
            />
            <span class="title__name">最新消息</span>
          </div>
          <div class="news-card-and-button">
            <div class="news-wrapper" :style="{ '--showCard': showCard }">
              <div
                class="news-card"
                v-for="(newsText, index) in news"
                :key="index"
                :ref="'newsCard' + index"
              >
                <img
                  class="news-card__image-background"
                  src="@/assets/pictures/plate_2.png"
                />
                <span class="news-card__content">
                  {{ newsText }}
                </span>
              </div>
            </div>
            <button class="news-button news-button--right" @click="nextCard">
              <img
                class="news-button__icon"
                src="@/assets/pictures/icon/icon_right.png"
              />
            </button>
            <button class="news-button news-button--left" @click="previousCard">
              <img
                class="news-button__icon"
                src="@/assets/pictures/icon/icon_left.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="parallax__group">
        <div
          class="recommendation-section parallax__layer parallax__layer--base"
        >
          <div class="title">
            <img
              class="title__logo-image"
              src="@/assets/pictures/icon/icon_menu-03-06.png"
            />
            <span class="title__name">菜單</span>
          </div>
          <div class="recommendation-section__scrolling-area">
            <div class="recommendation-section__wrapper">
              <button
                class="recommendation-section__button recommendation-section__button--exam"
                @mouseover="recommendationSelection = 'exam'"
              ></button>
              <button
                class="recommendation-section__button recommendation-section__button--lover"
                @mouseover="recommendationSelection = 'lover'"
              ></button>
              <button
                class="recommendation-section__button recommendation-section__button--single"
                @mouseover="recommendationSelection = 'single'"
              ></button>
              <button
                class="recommendation-section__button recommendation-section__button--seasick"
                @mouseover="recommendationSelection = 'seasick'"
              ></button>
              <button
                class="recommendation-section__button recommendation-section__button--party"
                @mouseover="recommendationSelection = 'party'"
              ></button>
              <div
                class="recommendation-section__bubble-text recommendation-section__bubble-text--exam"
                v-show="recommendationSelection == 'exam'"
              >
                <span>考前積陰德</span>
              </div>
              <div
                class="recommendation-section__bubble-text recommendation-section__bubble-text--lover"
                v-show="recommendationSelection == 'lover'"
              >
                <span>只黏你心不黏你口</span>
              </div>
              <div
                class="recommendation-section__bubble-text recommendation-section__bubble-text--single"
                v-show="recommendationSelection == 'single'"
              >
                <span>何必單戀一枝花</span>
              </div>
              <div
                class="recommendation-section__bubble-text recommendation-section__bubble-text--seasick"
                v-show="recommendationSelection == 'seasick'"
              >
                <span>今天要吃什麼寶</span>
              </div>
              <div
                class="recommendation-section__bubble-text recommendation-section__bubble-text--party"
                v-show="recommendationSelection == 'party'"
              >
                <span>你在刷牙我在開趴</span>
              </div>
              <img
                class="recommendation-section__img"
                src="@/assets/pictures/illustration/ill.png"
                v-show="recommendationSelection == ''"
                @mouseover="recommendationSelection = ''"
              />
              <img
                class="recommendation-section__img"
                src="@/assets/pictures/illustration/ill_exam.png"
                v-show="recommendationSelection == 'exam'"
                @mouseover="recommendationSelection = ''"
              />
              <img
                class="recommendation-section__img"
                src="@/assets/pictures/illustration/ill_lover.png"
                v-show="recommendationSelection == 'lover'"
                @mouseover="recommendationSelection = ''"
              />
              <img
                class="recommendation-section__img"
                src="@/assets/pictures/illustration/ill_single.png"
                v-show="recommendationSelection == 'single'"
                @mouseover="recommendationSelection = ''"
              />
              <img
                class="recommendation-section__img"
                src="@/assets/pictures/illustration/ill_seasick.png"
                v-show="recommendationSelection == 'seasick'"
                @mouseover="recommendationSelection = ''"
              />
              <img
                class="recommendation-section__img"
                src="@/assets/pictures/illustration/ill_party.png"
                v-show="recommendationSelection == 'party'"
                @mouseover="recommendationSelection = ''"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      news: ["Hi", "test", "yeah", "hihihihi", "this is my website"],
      currentNewsNum: 0,
      showCard: 0,
      logoSectionHeight: (window.innerHeight * 65) / 100,
      logoSectionWhiteOpacity: 0,
      newsCardNum: 4,
      recommendationSelection: "",
    };
  },
  mounted() {
    if (window.innerWidth <= 650) {
      this.newsCardNum = 1;
    } else if (window.innerWidth <= 1200) {
      this.newsCardNum = 2;
    } else if (window.innerWidth <= 1600) {
      this.newsCardNum = 3;
    } else {
      this.newsCardNum = 4;
    }
    window.onresize = () => {
      this.showCard = 0;
      if (window.innerWidth <= 650) {
        this.newsCardNum = 1;
      } else if (window.innerWidth <= 1200) {
        this.newsCardNum = 2;
      } else if (window.innerWidth <= 1600) {
        this.newsCardNum = 3;
      } else {
        this.newsCardNum = 4;
      }
    };
  },
  methods: {
    previousCard() {
      if (this.showCard > 0) {
        this.showCard -= 1;
      }
    },
    nextCard() {
      if (this.showCard + this.newsCardNum < this.news.length) {
        this.showCard += 1;
      }
    },
    getScrollingPosition() {
      var top = this.$refs.parallax.scrollTop;
      this.logoSectionWhiteOpacity = Math.min(top / this.logoSectionHeight, 1);
    },
    selectRecommendation() {},
  },
};
</script>
