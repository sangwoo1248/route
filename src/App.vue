<template>
  <div id="app">
    <!-- 헤더 -->
    <header class="header">
      <div class="header-wrapper">
        <div class="logo-container">
          <router-link to="/">
            <img src="@/assets/logo.jpg" alt="로고" class="logo" />
          </router-link>
        </div>
        <div class="menu-icon" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="menu-list" :class="{ active: menuActive }" id="menuList">
        <ul>
          <li><router-link to="/info">소개</router-link></li>
          <li><router-link to="/project">프로그램</router-link></li>
          <li><router-link to="/content">콘텐츠</router-link></li>
          <li><router-link to="/customer">고객센터</router-link></li>
        </ul>
      </div>
    </header>

    <!-- 페이지 라우터 뷰 -->
    <router-view />

    <!--<footer v-if="$route.path === '/'">-->

    <!-- 푸터 -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-left">
          <div class="footer-logo-sns">
            <img src="@/assets/logo2.png" alt="Root 로고" class="footer-logo" />
            <div class="footer-sns">
              <a
                href="https://www.instagram.com/root.office_?igsh=djF5cGo0bGtnZm1l"
                target="_blank"
              >
                <img src="@/assets/instar.jpg" alt="인스타그램" />
              </a>
              <a href="https://pf.kakao.com/_yourchannel" target="_blank">
                <img src="@/assets/ca.png" alt="카카오톡 채널" />
              </a>
            </div>
          </div>
          <div class="footer-info">
            <p><strong>root</strong> | 대표이사 주연희</p>
            <p>사업자번호 | 전화번호 031-733-2523</p>
            <p>경기도 성남시 분당구 정자일로 156번길 11 세명타워 4층</p>
            <p>&copy; root all rights reserved</p>
          </div>
        </div>
        <div class="footer-right">
          <ul class="footer-menu">
            <li><router-link to="/info">서비스 소개</router-link></li>
            <li><router-link to="/content">콘텐츠</router-link></li>
            <li><router-link to="/project">프로그램</router-link></li>
            <li><router-link to="/supporters">문의하기</router-link></li>
            <li><router-link to="/customer">고객센터</router-link></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppRoot",
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

<style>
@import "@/assets/index.css";
</style>
