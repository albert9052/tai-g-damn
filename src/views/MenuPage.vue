<template>
  <div class="menu-page">
    <div class="menu-page-title">
      <img
        class="menu-page-title__icon"
        src="@/assets/pictures/icon/icon_menu-03-06.png"
      />
      <span class="menu-page-title__name">菜單</span>
    </div>
    <div class="menu-page-content">
      <div class="menu-page-content__title">單點系列</div>
      <div class="dish-card-container">
        <div
          class="dish-card"
          v-for="(item, index) in menuALaCarteItems"
          :key="index"
        >
          <div class="dish-card__content">
            <span class="dish-card__name">{{ item.name }}</span>
            <span class="dish-card__price">NT ${{ item.price }}</span>
            <span class="dish-card__cal">{{ item.cal }} Kcal</span>
          </div>
          <img
            class="dish-card__img"
            :src="require(`@/assets/pictures/menu/${item.img}`)"
          />
        </div>
      </div>
      <div class="menu-page-content__title">套餐系列</div>
      <div class="dish-card-container">
        <div
          class="dish-card dish-card--set"
          v-for="(item, index) in menuSetItems"
          :key="index"
        >
          <div class="dish-card__content">
            <span class="dish-card__name">{{ item.name }}</span>
            <span class="dish-card__price">NT ${{ item.price }}</span>
            <span class="dish-card__cal">{{ item.cal }} Kcal</span>
            <span class="dish-card__description">{{ item.description }}</span>
          </div>
          <img
            class="dish-card__img"
            :src="require(`@/assets/pictures/menu/${item.img}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuPage",
  data() {
    return {
      menuALaCarteItems: [
        {
          name: "鑫鑫腸",
          price: 35,
          cal: 300,
          img: "sausage.png",
        },
        {
          name: "鹹酥雞",
          price: 60,
          cal: 525,
          img: "chicken.png",
        },
        {
          name: "甜不辣",
          price: 35,
          cal: 350,
          img: "tempura.png",
        },
        {
          name: "銀絲卷",
          price: 40,
          cal: 280,
          img: "silk-thread_roll.png",
        },
        {
          name: "豬血糕",
          price: 35,
          cal: 340,
          img: "pig_blood_cake.png",
        },
        {
          name: "豆腐",
          price: 35,
          cal: 500,
          img: "tofu.png",
        },
        {
          name: "豆乾",
          price: 30,
          cal: 250,
          img: "tempura2.png",
        },
        {
          name: "杏鮑菇",
          price: 50,
          cal: 175,
          img: "mushroom.png",
        },
        {
          name: "玉米筍",
          price: 60,
          cal: 130,
          img: "baby_corn.png",
        },
        {
          name: "高麗菜",
          price: 35,
          cal: 100,
          img: "cabbage.png",
        },
        {
          name: "小黃瓜",
          price: 40,
          cal: 150,
          img: "cucumber.png",
        },
        {
          name: "地瓜條",
          price: 40,
          cal: 500,
          img: "sweet_potato.png",
        },
        {
          name: "玉米",
          price: 30,
          cal: 160,
          img: "corn.png",
        },
      ],
      menuSetItems: [
        {
          name: "何必單戀一枝花",
          price: 130,
          cal: 950,
          description: "內含：鹹酥雞、地瓜條、銀絲卷",
          img: "single.png",
        },
        {
          name: "只黏你心不黏你口",
          price: 120,
          cal: 975,
          description: "內含：鹹酥雞、鑫鑫腸、小黃瓜",
          img: "lover.png",
        },
        {
          name: "今天要吃什麼寶",
          price: 170,
          cal: 1005,
          description: "內含：鹹酥雞、鑫鑫腸、小黃瓜、豆乾、豬血糕",
          img: "seasick.png",
        },
        {
          name: "考前積陰德",
          price: 200,
          cal: 1435,
          description: "內含：地瓜條、豆乾、銀絲卷、杏鮑菇、玉米、小黃瓜",
          img: "exam.png",
        },
        {
          name: "你在刷牙我在開趴",
          price: 350,
          cal: 2390,
          description:
            "內含：鹹酥雞、鑫鑫腸、地瓜條、玉米、小黃瓜、銀絲卷、豬血糕、豆乾、杏鮑菇",
          img: "party.png",
        },
      ],
    };
  },
  methods: {},
};
</script>
