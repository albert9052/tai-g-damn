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
            :style="{ '--width-ratio': 1 - logoSectionWhiteOpacity }"
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
                v-for="(newsContent, index) in news"
                :key="index"
                :ref="'newsCard' + index"
              >
                <img
                  class="news-card__image-background"
                  src="@/assets/pictures/plate_2.png"
                />
                <div class="news-card__content">
                  <div
                    class="news-card__line"
                    :class="{ 'news-card__line--title': index == 0 }"
                    v-for="(newsLine, index) in newsContent"
                    :key="index"
                  >
                    {{ newsLine }}
                  </div>
                </div>
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
                @click="confirmSelection"
              ></button>
              <button
                class="recommendation-section__button recommendation-section__button--lover"
                @mouseover="recommendationSelection = 'lover'"
                @click="confirmSelection"
              ></button>
              <button
                class="recommendation-section__button recommendation-section__button--single"
                @mouseover="recommendationSelection = 'single'"
                @click="confirmSelection"
              ></button>
              <button
                class="recommendation-section__button recommendation-section__button--seasick"
                @mouseover="recommendationSelection = 'seasick'"
                @click="confirmSelection"
              ></button>
              <button
                class="recommendation-section__button recommendation-section__button--party"
                @mouseover="recommendationSelection = 'party'"
                @click="confirmSelection"
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
          <!-- End of scrolling area -->
          <div class="recommendation-section__chosen-set" ref="setArea">
            <div class="recommendation-section__set-image-container">
              <div class="recommendation-section__set-image-background"></div>
              <div class="recommendation-section__set-name">
                {{ confirmedSet.name }}
              </div>
              <img
                class="recommendation-section__image"
                :src="
                  require(`@/assets/pictures/menu/${confirmedSet.imageLink}`)
                "
              />
            </div>
            <div class="recommendation-section__set-description-container">
              <div
                class="recommendation-section__set-description"
                v-for="(description, index) in confirmedSet.descriptions"
                :key="index"
              >
                {{ description }}
              </div>
            </div>
          </div>
          <div class="recommendation-section__more-menu-button-container">
            <button
              class="recommendation-section__more-menu-button"
              @click="goToMenu"
            >
              點擊查看更多菜單
            </button>
          </div>
          <div class="main-page-footer">
            <div class="main-page-footer__list">
              <router-link class="main-page-footer__link" to="/"
                >首頁</router-link
              >
              <router-link class="main-page-footer__link" to="/menu"
                >菜單
              </router-link>
              <router-link class="main-page-footer__link" to="/story"
                >品牌故事
              </router-link>
              <router-link class="main-page-footer__link" to="/location"
                >據點
              </router-link>
              <router-link class="main-page-footer__link" to="/joinus"
                >加盟
              </router-link>
              <a class="main-page-footer__link">網站使用條款 </a>
              <a class="main-page-footer__link">隱私權保護聲明 </a>
            </div>
            <div class="main-page-footer__information">
              <div class="main-page-footer__information-line">
                電話訂購 &nbsp; +886-2-2733-3141
              </div>
              <div class="main-page-footer__information-line">
                加盟電話 &nbsp; +886-2-2771-2171
              </div>
              <div class="main-page-footer__information-line">
                地址 10635 台北市大安區基隆路 4 段 43 號
              </div>
              <div class="main-page-footer__information-line">&nbsp;</div>
              <div class="main-page-footer__information-line">
                &copy; Copyright 2022 - 台雞Damn. All Rights Reserved.
              </div>
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
      news: [
        [
          "降『肉』",
          "九天玄女下凡唯一指定美味—— 台雞Damn",
          "就讓台雞Damn 滿足您的味蕾",
          "為您獻上女神唯一指定美食，讓您與美味的距離不用再以英呎計算，隨時都能享受降『肉』快感！",
        ],
        [
          "考前積陰德套餐 期間限定優惠",
          "即日起～ 6/17 只要 $180",
          "想要臨時抱佛腳？那就來一份素食套餐，考前積陰德，好好度過期末考吧！",
          "備註",
          "優惠不重複，不與其他行銷活動並行。",
          "實體店面限定，不適用外送服務。",
          "以店面販售之商品庫存為主。",
        ],
        [
          "加盟熱烈招募中！",
          "成為學生最堅實的陪伴，溫暖滿滿。",
          "享用台雞Damn 的食物，幸福滿滿。",
          "想要圓一個創業夢嗎？那就趕快加入我們一同攜手圓夢吧！",
          /*"讓更多人了解我們的品牌裡面，讓台雞Damn 成為台灣鹹酥雞的第一選擇！",*/
          "加盟諮詢方式",
          "私訊 FB 粉專",
          "加盟諮詢專線：",
          "+886-2-2771-2171",
        ],
        [
          "台雞Damn — 北科大店歡慶開幕",
          "6/1 到 6/3 開幕期間限定",
          "來店打卡即可獲得一份鹹酥雞",
          "歡迎大家蒞臨本店",
          "地址 106344 台北市大安區忠孝東路 3 段 1 號",
          "電話 +886-2-2771-2171",
        ],
        [
          "新套餐上市 我在刷牙你在開趴",
          "即日起推出『我在刷牙你在開趴』的套餐，包含著多種不同的食物，是能在晚上找到飽足一頓的美味，刺激你的味蕾。",
        ],
      ],
      currentNewsNum: 0,
      showCard: 0,
      logoSectionHeight: (window.innerHeight * 65) / 100,
      logoSectionWhiteOpacity: 0,
      newsCardNum: 4,
      recommendationSelection: "",
      allSets: [
        {
          key: "exam",
          name: "考前積陰德",
          imageLink: "exam.png",
          descriptions: [
            "考前積陰德",
            "適用對象：考生",
            "內含：地瓜條、豆乾、銀絲卷、杏鮑菇、玉米、小黃瓜",
            "NT $200",
            "1435 Kcal",
          ],
        },
        {
          key: "lover",
          name: "只黏你心不黏你口",
          imageLink: "lover.png",
          descriptions: [
            "只黏你心不黏你口",
            "適用對象：情侶",
            "內含：鹹酥雞、鑫鑫腸、小黃瓜",
            "NT $120",
            "975 Kcal",
          ],
        },
        {
          key: "single",
          name: "何必單戀一枝花",
          imageLink: "single.png",
          descriptions: [
            "何必單戀一枝花",
            "適用對象：失戀的人",
            "內含：鹹酥雞、地瓜條、銀絲卷",
            "NT $130",
            "950 Kcal",
          ],
        },
        {
          key: "seasick",
          name: "今天要吃什麼寶",
          imageLink: "seasick.png",
          descriptions: [
            "今天要吃什麼寶",
            "適用對象：暈船仔",
            "內含：鹹酥雞、鑫鑫腸、小黃瓜、豆乾、豬血糕",
            "NT $170",
            "1005 Kcal",
          ],
        },
        {
          key: "party",
          name: "你在刷牙我在開趴",
          imageLink: "party.png",
          descriptions: [
            "你在刷牙我在開趴",
            "適用對象：開趴仔",
            "內含：鹹酥雞、鑫鑫腸、地瓜條、玉米、小黃瓜、銀絲卷、豬血糕、豆乾、杏鮑菇",
            "NT $350",
            "2390 Kcal",
          ],
        },
      ],
      confirmedSet: {
        name: "",
        imageLink: "exam.png",
        descriptions: [],
      },
    };
  },
  mounted() {
    this.confirmedSet = this.allSets[0];
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
    confirmSelection() {
      for (let i = 0; i < this.allSets.length; i++) {
        if (this.allSets[i].key == this.recommendationSelection) {
          this.confirmedSet = this.allSets[i];
          break;
        }
      }
      this.$refs.setArea.scrollIntoView({
        behavior: "smooth",
      });
    },
    goToMenu() {
      this.$router.push("/menu");
    },
  },
};
</script>
