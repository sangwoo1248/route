<template>
  <div>
    <header class="header">
      <div class="header-wrapper">
        <div class="logo-container">
          <RouterLink to="/">
            <img src="@/assets/logo.jpg" alt="로고" class="logo" />
          </RouterLink>
        </div>
        <div class="menu-icon" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="menu-list" :class="{ active: menuActive }">
        <ul>
          <li><RouterLink to="/info">소개</RouterLink></li>
          <li><RouterLink to="/project">프로그램</RouterLink></li>
          <li><RouterLink to="/content">콘텐츠</RouterLink></li>
          <li><RouterLink to="/customer">고객센터</RouterLink></li>
        </ul>
      </div>
    </header>

    <main class="main">
      <section class="circle-image-section">
        <h2 class="section-title">CONTENTS</h2>
        <div
          class="circle-item scroll-fade-in"
          v-for="(item, index) in contentItems"
          :key="index"
        >
          <div class="circle-image">
            <img :src="require(`@/assets/${item.image}`)" :alt="item.alt" />
          </div>
          <div :class="item.textClass">
            <h3>{{ item.title }}</h3>
            <p v-for="(line, i) in item.description" :key="i">{{ line }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "ContentPage",
  data() {
    return {
      menuActive: false,
      contentItems: [
        {
          image: "poster.jpg",
          alt: "심마니 프로젝트 포스터",
          title: "심마니 프로젝트",
          textClass: "circle-text1",
          description: [
            "색을 통한 심리를 다루고 있고,",
            "잠재력에 대한 설명 뿐 아니라 다른 컬러가 나에게 의미하는 것이 무엇인지에 대한 해석을 해드릴 뿐 아니라",
            '추가적인 검사를 통해서 "룻북-상담 결과 책자"을 선물로 드리고 있습니다.',
          ],
        },
        {
          image: "star.jpg",
          alt: "별자리 테스트",
          title: "별자리 테스트",
          textClass: "circle-text2",
          description: [
            "✨ 7월 첫째 주, 별자리가 전하는 메시지 ✨",
            "이번 주, 별들은 너에게 어떤 이야기를 들려줄까? 사소한 하루도, 별의 흐름을 따라가면 조금 더 특별해질지 몰라요.",
          ],
        },
        {
          image: "object.jpg",
          alt: "사물 심리",
          title: "사물심리 테스트",
          textClass: "circle-text3",
          description: [
            "이 테스트는 당신의 무의식과 인간관계, 스트레스 반응 등을 가볍게 반영합니다.",
          ],
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    animateOnScroll(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
  },
  mounted() {
    const observer = new IntersectionObserver(this.animateOnScroll, {
      threshold: 0.1,
    });
    document.querySelectorAll(".scroll-fade-in").forEach((el) => {
      observer.observe(el);
    });
  },
};
</script>

<style scoped>
@import "@/assets/content.css";
</style>
