<template>
  <div class="story-page">
    <div class="story-page-title">
      <img
        class="story-page-title__icon"
        src="@/assets/pictures/icon/icon_brandstory-03-06.png"
      />
      <span class="story-page-title__name">品牌故事</span>
    </div>
    <div class="story-page-content">
      <div
        class="story-page-content__text"
        v-for="(item, index) in story"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryPage",
  data() {
    return {
      story: [
        `台雞Damn，`,
        `是在台灣發跡的人氣餐飲品牌，`,
        `2022 年在台北大安區創立第一家門市。`,
        `台雞Damn 的取名是來自於『台積電』的發音，`,
        `俗擱有力，正港的台灣味！`,
        `我們致力於推廣台灣鹽酥雞，規劃新穎的組合，堅持美味的秘訣，掌管健康的品質。`,
        `成為學生最堅實的陪伴，溫暖滿滿。享用台雞Damn 的食物，幸福滿滿。`,
      ],
    };
  },
  methods: {},
};
</script>
