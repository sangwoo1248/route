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

    <section class="intro-section" style="margin-top: 100px">
      <div class="speech-bubble-image">
        <img src="@/assets/logo2.png" alt="말풍선" />
      </div>
      <div class="description">
        <p>
          롯트는 나의 가치를 찾아가는 심리상담 플랫폼입니다. 우리는 모두 나라는
          사람이란는 이유로 가치가 있지만 그것을 잊고 살아가고 있습니다.
        </p>
        <p>
          잊었던 나의 가치를 나의 심리를 진단하고 알아보는 과정을 통해서 진정한
          나를 알아보면 내가 원하는 삶이 무엇이고 내 삶을 내 뜻대로 살아갈 수
          있습니다.
        </p>
        <p>
          이것을 기반으로 저희 룻트는 다양한 심리 컨텐츠를 제작하며 심리라고
          하는 어려운 나의 마음을 좀 더 친숙하게 다갈 수 있도록 노력하고
          있습니다.
        </p>
        <p>룻트를 통해 나의 가치를 찾고 나의 방향를 찾아보세요!</p>
      </div>
    </section>

    <section class="form-section-with-logo with-padding">
      <div class="form-section">
        <div class="info-box">
          <h3>ROOT 나의 뿌리</h3>
          <p>
            나의 근본을 찾아 ‘나’라는 사람이 누구인지 이해하며 가치를 찾아갈 수
            있습니다.<br />
            전문적인 분석 결과를 통해 나의 뿌리를 확인하세요
          </p>
        </div>

        <div class="info-box">
          <h3>√ROOT 나의 모든 수</h3>
          <p>
            내가 가지고 있는 강점들과 약점들을 분석하여 내가 성장할 수 있는
            것들을 발견하며<br />
            나의 가치를 찾아보세요
          </p>
        </div>

        <div class="info-box">
          <h3>ROUTE 나의 방향</h3>
          <p>
            불확실한 미래를 나라는 사람의 가치를 찾아 보다 확실한 방향 제시를
            해드립니다.<br />
            혹여 잘못 길을 가더라도 다시 바른 길로 갈 수 있도록 선택에 있어서
            확신을 가져보세요
          </p>
        </div>
      </div>

      <div class="vertical-line"></div>

      <div class="logo-bubble">
        <img src="@/assets/bloom1.png" alt="말풍선 로고" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "InfoPage",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style scoped>
@import "@/assets/info.css";
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  cursor: pointer;
  margin-left: auto;
}

.menu-icon span {
  display: block;
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 2px;
}

.intro-section {
  margin-top: 80px;
}

.with-padding {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
