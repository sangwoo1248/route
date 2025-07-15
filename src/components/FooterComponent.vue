<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- 왼쪽: 로고 및 정보 -->
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

      <!-- 오른쪽: 메뉴 -->
      <div class="footer-right">
        <ul class="footer-menu">
          <li><a href="/info">서비스 소개</a></li>
          <li><a href="/content">콘텐츠</a></li>
          <li><a href="/project">프로그램</a></li>
          <li><a href="/supporters">문의하기</a></li>
          <li><a href="/customer">고객센터</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style src="./FooterComponent.css"></style>
