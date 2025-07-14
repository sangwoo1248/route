<template>
  <main>
    <section class="speech-container">
      <p class="speech-title">WELCOME! 숨겨진 나를 찾아가는 여정</p>
      <router-link to="/info">
        <img src="@/assets/logo2.png" alt="말풍선 이미지" class="bloom" />
      </router-link>
    </section>

    <h2 class="section-title">OUR PROJECT</h2>
    <section class="slider-wrapper">
      <div
        class="slider"
        :style="{ transform: `translateX(-${projectIndex * 100}%)` }"
      >
        <div class="slide" v-for="(img, i) in projectImages" :key="'p' + i">
          <router-link to="/project">
            <img :src="img" :alt="'포스터' + (i + 1)" />
          </router-link>
        </div>
      </div>
      <button class="slide-btn prev" @click="prevSlide('project')">
        &#10094;
      </button>
      <button class="slide-btn next" @click="nextSlide('project')">
        &#10095;
      </button>
      <div class="dots">
        <span
          v-for="(img, i) in projectImages"
          :key="'dot-p' + i"
          class="dot"
          :class="{ active: projectIndex === i }"
          @click="setSlide('project', i)"
        ></span>
      </div>
    </section>

    <h2 class="section-title">CONTENTS</h2>
    <section class="content-wrapper">
      <div
        class="slider"
        :style="{ transform: `translateX(-${contentIndex * 100}%)` }"
      >
        <div class="slide" v-for="(img, i) in contentImages" :key="'c' + i">
          <router-link to="/content">
            <img :src="img" :alt="'콘텐츠' + (i + 1)" />
          </router-link>
        </div>
      </div>
      <button class="slide-btn prev" @click="prevSlide('content')">
        &#10094;
      </button>
      <button class="slide-btn next" @click="nextSlide('content')">
        &#10095;
      </button>
      <div class="dots">
        <span
          v-for="(img, i) in contentImages"
          :key="'dot-c' + i"
          class="dot"
          :class="{ active: contentIndex === i }"
          @click="setSlide('content', i)"
        ></span>
      </div>
    </section>

    <section class="supporter-section">
      <div class="supporter-box">
        <div class="supporter-left">
          <h2>서포터즈</h2>
          <p>룻트와 함께하실 분을 찾습니다</p>
          <p>가나다라마바사아자차카타파하</p>
          <p>
            김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타
            워리워리
          </p>
          <p>
            세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에
            고양이 고양이엔 바둑이 바둑이는 돌돌이
          </p>
          <div class="support-buttons">
            <router-link to="/supporters" class="square-button"
              >신청하기</router-link
            >
            <router-link to="/info" class="square-button"
              >더 알아보기</router-link
            >
          </div>
        </div>
        <div class="supporter-right">
          <img src="@/assets/sansami.png" alt="서포터즈 이미지" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      projectIndex: 0,
      contentIndex: 0,
      projectImages: [
        require("@/assets/poster.jpg"),
        require("@/assets/robot.png"),
        require("@/assets/sight.jpg"),
      ],
      contentImages: [
        require("@/assets/poster.jpg"),
        require("@/assets/star.jpg"),
        require("@/assets/object.jpg"),
      ],
    };
  },
  methods: {
    prevSlide(type) {
      if (type === "project") {
        this.projectIndex =
          (this.projectIndex + this.projectImages.length - 1) %
          this.projectImages.length;
      } else {
        this.contentIndex =
          (this.contentIndex + this.contentImages.length - 1) %
          this.contentImages.length;
      }
    },
    nextSlide(type) {
      if (type === "project") {
        this.projectIndex = (this.projectIndex + 1) % this.projectImages.length;
      } else {
        this.contentIndex = (this.contentIndex + 1) % this.contentImages.length;
      }
    },
    setSlide(type, index) {
      if (type === "project") {
        this.projectIndex = index;
      } else {
        this.contentIndex = index;
      }
    },
  },
};
</script>
