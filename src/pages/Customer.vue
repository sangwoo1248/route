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

    <div class="support-container">
      <h1>ROOT 고객센터</h1>
      <p class="subtitle">
        안녕하세요. ROOT 고객센터입니다.<br />무엇을 도와드릴까요?
      </p>

      <div class="info-cards">
        <div class="info-card">
          <div class="icon">🕘</div>
          <h3>이용 시간</h3>
          <ul>
            <li>고객 상담: <strong>평일 09:00 - 18:00</strong></li>
            <li>점심 시간: <strong>12:00 - 13:00</strong></li>
            <li>주말 및 공휴일: <strong>휴무</strong></li>
          </ul>
        </div>

        <div class="info-card">
          <div class="icon">💬</div>
          <h3>문의 방법</h3>
          <ul>
            <li>
              이메일:
              <a href="mailto:root.office120@gmail.com"
                >root.office120@gmail.com</a
              >
            </li>
          </ul>
          <div class="button-wrapper">
            <RouterLink to="/supporters" class="square-button"
              >더 알아보기</RouterLink
            >
          </div>
        </div>
      </div>

      <div class="faq-section">
        <div class="faq-title">❓ 자주 묻는 질문</div>

        <div
          class="faq-item"
          v-for="(faq, index) in faqs"
          :key="index"
          :class="{ active: activeIndex === index }"
        >
          <button class="faq-question" @click="toggleFAQ(index)">
            <span class="question-text">{{ faq.question }}</span>
            <span class="arrow">∨</span>
          </button>
          <div class="faq-answer">{{ faq.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerPage",
  data() {
    return {
      menuActive: false,
      activeIndex: null,
      faqs: [
        { question: "심마니가 뭔가요?", answer: "심마니는 캐릭터입니다." },
        {
          question: "프로그램은 어떻게 신청하나요?",
          answer:
            "서포터즈 신청하기 또는 고객센터 문의방법 신청하기 눌러주세요.",
        },
        { question: "준비중....", answer: "준비중...." },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    toggleFAQ(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
@import "@/assets/customer.css";
</style>
