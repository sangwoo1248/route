<template>
  <div>
    <header class="header">
      <div class="header-wrapper">
        <div class="logo-container">
          <a href="/">
            <img src="@/assets/logo.jpg" alt="로고" class="logo" />
          </a>
        </div>
        <div class="menu-icon" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="menu-list" :class="{ active: menuActive }">
        <ul>
          <li><a href="#">소개</a></li>
          <li><a href="#">프로그램</a></li>
          <li><a href="#">콘텐츠</a></li>
          <li><a href="#">고객센터</a></li>
        </ul>
      </div>
    </header>

    <main class="main">
      <section class="circle-image-section">
        <h2 class="section-title">OUR PROJECT</h2>

        <div
          class="circle-item scroll-fade-in"
          v-for="(item, index) in projects"
          :key="index"
        >
          <div class="circle-image">
            <img :src="item.img" :alt="item.alt" />
          </div>
          <div :class="item.textClass">
            <h3>{{ item.title }}</h3>
            <p v-html="item.description"></p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  data() {
    return {
      menuActive: false,
      projects: [
        {
          img: require("@/assets/poster.jpg"),
          alt: "심마니 프로젝트 포스터",
          textClass: "circle-text1",
          title: "심마니 프로젝트",
          description: `색을 통한 심리를 다루고 있고,<br />
              잠재력에 대한 설명 뿐 아니라 다른 컬러가 나에게 의미하는 것이
              무엇인지에 대한 해석을 해드릴 뿐 아니라<br />
              추가적인 검사를 통해서 "룻북-상담 결과 책자"을 선물로 드리고
              있습니다.`,
        },
        {
          img: require("@/assets/robot.png"),
          alt: "AI 로봇",
          textClass: "circle-text2",
          title: "AI 상담",
          description: "준비중...",
        },
        {
          img: require("@/assets/sight.jpg"),
          alt: "풍경 테스트",
          textClass: "circle-text3",
          title: "풍경 테스트",
          description: "준비중...",
        },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".scroll-fade-in").forEach((el) => {
      observer.observe(el);
    });
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style scoped>
@import "@/assets/project.css";
</style>
